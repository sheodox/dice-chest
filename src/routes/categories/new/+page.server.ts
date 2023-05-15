import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { linkGen } from '$lib/breadcrumbs';
import { ClientResponseError } from 'pocketbase';
import { pbErrorToErrorString } from '$lib/util';

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

			if (e instanceof ClientResponseError) {
				return fail(400, {
					validationMessage: pbErrorToErrorString(e),
					name: formData.get('name') as string
				});
			}
		}

		if (id) {
			throw redirect(303, linkGen.categories.show(id));
		} else {
			throw error(500, 'Something went wrong creating a category');
		}
	}
};
