import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { linkGen } from '$lib/breadcrumbs';

export const load = (({ locals, params }) => {
	return {
		category: locals.pb.collection('category').getOne(params.categoryId).then(structuredClone)
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
		}

		if (id) {
			throw redirect(303, linkGen.activityLists.show(id));
		} else {
			throw error(500, 'Something went wrong creating an activity list');
		}
	}
};
