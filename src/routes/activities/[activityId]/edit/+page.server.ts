import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { linkGen } from '$lib/breadcrumbs';

export const load = (async ({ locals, params }) => {
	const activity = await locals.pb
		.collection('activity')
		.getOne(params.activityId, { expand: `activityList,activityList.category` })
		.then(structuredClone);

	return {
		activity,
		category: activity.expand.activityList.expand.category,
		activityList: activity.expand.activityList
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
			throw error(500, 'Something went wrong updating an activity');
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
