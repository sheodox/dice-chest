import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { ClientResponseError } from 'pocketbase';
import { pbErrorToErrorString } from '$lib/util';

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb
				.collection('users')
				.authWithPassword(body.email as string, body.password as string);

			if (!locals.pb?.authStore?.model?.verified) {
				locals.pb.authStore.clear();
				return fail(400, {
					email: body.email as string,
					notVerified: true
				});
			}
		} catch (e) {
			console.log('Error logging in: ', e);

			if (e instanceof ClientResponseError) {
				return fail(400, {
					email: body.email as string,
					validationMessage: pbErrorToErrorString(e)
				});
			} else {
				throw error(500, 'Something went wrong registering');
			}
		}

		throw redirect(303, '/');
	},
	resendVerification: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').requestVerification(body.email as string);
		} catch (e) {
			console.log('Error resending verification: ', e);

			if (e instanceof ClientResponseError) {
				const validationMessage = Object.entries(
					e.response.data as Record<string, { message: string }>
				)
					.map(([name, { message }]) => {
						return `${name}: ${message}`;
					})
					.join(' ');

				return fail(400, {
					email: body.email as string,
					validationMessage
				});
			} else {
				throw error(500, 'Something went wrong resending a verification email');
			}
		}

		return fail(303, {
			email: body.email as string,
			successMessage: 'Verification email sent.'
		});
	}
};
