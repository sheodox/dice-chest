import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { linkGen } from '$lib/breadcrumbs';
import { pbErrorToErrorString } from '$lib/util';
import { ClientResponseError } from 'pocketbase';
import type { ActivityList, Category } from '$lib/types';

const activityListExpand = 'activity_list(category)';

export const load = (async ({ locals, params }) => {
	const category = (await locals.pb
		.collection('category')
		.getOne(params.categoryId, { expand: activityListExpand })
		.then(structuredClone)) as Promise<Category>;

	return {
		category,
		activityLists: ((category as any).expand[activityListExpand] ?? []) as ActivityList[]
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	newActivityList: async ({ request, locals, params }) => {
		if (!locals.user) {
			return;
		}

		let id = '';

		const formData = await request.formData();

		formData.append('user', locals.user.id);
		formData.append('category', params.categoryId);

		try {
			const rec = await locals.pb.collection('activity_list').create(formData);

			id = rec.id;
		} catch (e) {
			console.log('Error creating activity list: ', e);

			if (e instanceof ClientResponseError) {
				return fail(400, {
					name: formData.get('name') as string,
					validationMessage: pbErrorToErrorString(e)
				});
			} else {
				throw error(500, 'Something went wrong creating activity list');
			}
		}

		if (id) {
			throw redirect(303, linkGen.activityLists.show(id));
		} else {
			throw error(500, 'Something went wrong creating an activity list');
		}
	}
};
