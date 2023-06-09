import { error, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { linkGen } from '$lib/breadcrumbs';
import { pbErrorToErrorString } from '$lib/util';
import { ClientResponseError } from 'pocketbase';
import type { Activity, ActivityList, Category } from '$lib/types';

export const load = (async ({ locals, params }) => {
	const activity = await locals.pb
		.collection('activity')
		.getOne(params.activityId, { expand: `activityList,activityList.category` })
		.then(structuredClone);

	return {
		activity: activity as Activity,
		category: (activity as any).expand.activityList.expand.category as Category,
		activityList: (activity as any).expand.activityList as ActivityList
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	update: async ({ request, locals, params }) => {
		if (!locals.user) {
			return;
		}

		const formData = await request.formData();

		try {
			await locals.pb.collection('activity').update(params.activityId, formData);
		} catch (e) {
			console.log('Error creating category: ', e);
			if (e instanceof ClientResponseError) {
				return fail(400, {
					name: formData.get('name') as string,
					description: formData.get('description') as string,
					validationMessage: pbErrorToErrorString(e)
				});
			} else {
				throw error(500, 'Something went wrong updating an activity');
			}
		}

		throw redirect(303, linkGen.activities.show(params.activityId));
	},
	delete: async ({ params, locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('activity').delete(params.activityId);
		} catch (e) {
			console.log('Error deleting activity: ', e);
			throw error(500, 'Something went wrong deleting an activity');
		}

		throw redirect(303, linkGen.activityLists.show(body.activityListId as string));
	}
};
