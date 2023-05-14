import type { LayoutServerLoad } from './$types';

export const load = (({ locals }) => {
	if (locals.user) {
		return {
			user: locals.user,
			categories: locals.pb.collection('category').getFullList().then(structuredClone)
		};
	}

	return {
		user: undefined,
		categories: []
	};
}) satisfies LayoutServerLoad;
