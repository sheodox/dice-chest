import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ClientResponseError } from 'pocketbase';
import { pbErrorToErrorString } from '$lib/util';

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

			if (e instanceof ClientResponseError) {
				return fail(400, {
					name: body.name as string,
					email: body.email as string,
					password: body.password as string,
					passwordConfirm: body.passwordConfirm as string,
					validationMessage: pbErrorToErrorString(e)
				});
			} else {
				throw error(500, 'Something went wrong registering');
			}
		}

		throw redirect(303, '/login?new=true');
	}
};
