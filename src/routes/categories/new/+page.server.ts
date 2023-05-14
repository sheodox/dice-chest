import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { linkGen } from '$lib/breadcrumbs';

export const actions: Actions = {
	newCategory: async ({ request, locals }) => {
		if (!locals.user) {
			return;
		}

		let id = '';

		const formData = await request.formData();

		formData.append('user', locals.user.id);

		try {
			const rec = await locals.pb.collection('category').create(formData);

			id = rec.id;
		} catch (e) {
			console.log('Error creating category: ', e);
		}

		if (id) {
			throw redirect(303, linkGen.categories.show(id));
		} else {
			throw error(500, 'Something went wrong creating a category');
		}
	}
};
