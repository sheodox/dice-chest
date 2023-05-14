import { error, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').create({
				username: body.name,
				...body
			});
			await locals.pb.collection('users').requestVerification(body.email as string);
		} catch (e) {
			console.log('Error registering: ', e);
			throw error(500, 'Something went wrong');
		}

		throw redirect(303, '/login');
	}
};
