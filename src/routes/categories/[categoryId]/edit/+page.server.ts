import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { linkGen } from '$lib/breadcrumbs';

import type { PageServerLoad } from './$types';
import { ClientResponseError } from 'pocketbase';
import { pbErrorToErrorString } from '$lib/util';
import type { Category } from '$lib/types';

export const load = (async ({ locals, params }) => {
	const category = await locals.pb
		.collection('category')
		.getOne(params.categoryId)
		.then(structuredClone);

	return {
		category: category as Category
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

			if (e instanceof ClientResponseError) {
				return fail(400, {
					name: formData.get('name') as string,
					validationMessage: pbErrorToErrorString(e)
				});
			} else {
				throw error(500, 'Something went wrong updating a category');
			}
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
