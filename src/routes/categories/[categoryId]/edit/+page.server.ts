import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { linkGen } from '$lib/breadcrumbs';

import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const category = await locals.pb
		.collection('category')
		.getOne(params.categoryId)
		.then(structuredClone);

	return {
		category: category
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	update: async ({ request, locals, params }) => {
		if (!locals.user) {
			return;
		}

		const formData = await request.formData();

		try {
			await locals.pb.collection('category').update(params.categoryId, formData);
		} catch (e) {
			console.log('Error creating category: ', e);
			throw error(500, 'Something went wrong updating a category');
		}

		throw redirect(303, linkGen.categories.show(params.categoryId));
	},
	delete: async ({ params, locals }) => {
		try {
			await locals.pb.collection('category').delete(params.categoryId);
		} catch (e) {
			throw error(500, 'Something went wrong deleting a category');
		}

		throw redirect(303, '/');
	}
};
