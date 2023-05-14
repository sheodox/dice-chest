import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { linkGen } from '$lib/breadcrumbs';

export const load = (async ({ locals, params }) => {
	const activityList = await locals.pb
		.collection('activity_list')
		.getOne(params.activityListId, { expand: 'category' })
		.then(structuredClone);

	return {
		activityList,
		category: activityList.expand.category
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	newActivity: async ({ request, locals }) => {
		if (!locals.user) {
			return;
		}

		let id = '';

		const formData = await request.formData();

		formData.append('user', locals.user.id);

		try {
			const rec = await locals.pb.collection('activity').create(formData);

			id = rec.id;
		} catch (e) {
			console.log('Error creating activity: ', e);
		}

		if (id) {
			throw redirect(303, linkGen.activities.show(id));
		} else {
			throw error(500, 'Something went wrong creating an activity');
		}
	}
};
