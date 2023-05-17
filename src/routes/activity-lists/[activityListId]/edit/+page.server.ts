import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { linkGen } from '$lib/breadcrumbs';
import { pbErrorToErrorString } from '$lib/util';
import { ClientResponseError } from 'pocketbase';
import type { ActivityList, Category } from '$lib/types';
export const load = (async ({ locals, params }) => {
	const activityList = await locals.pb
		.collection('activity_list')
		.getOne(params.activityListId, { expand: `category` })
		.then(structuredClone);

	return {
		activityList: activityList as ActivityList,
		category: (activityList as any).expand.category as Category
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	update: async ({ request, locals, params }) => {
		if (!locals.user) {
			return;
		}

		const formData = await request.formData();

		try {
			await locals.pb.collection('activity_list').update(params.activityListId, formData);
		} catch (e) {
			console.log('Error creating category: ', e);
			if (e instanceof ClientResponseError) {
				return fail(400, {
					name: formData.get('name') as string,
					validationMessage: pbErrorToErrorString(e)
				});
			} else {
				throw error(500, 'Something went wrong updating activity list');
			}
		}

		throw redirect(303, linkGen.activityLists.show(params.activityListId));
	},
	delete: async ({ params, locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('activity_list').delete(params.activityListId);
		} catch (e) {
			throw error(500, 'Something went wrong deleting a category');
		}

		throw redirect(303, linkGen.categories.show(body.categoryId as string));
	}
};
