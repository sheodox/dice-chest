import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { ClientResponseError } from 'pocketbase';
import { pbErrorToErrorString } from '$lib/util';
import type { Activity, ActivityList, Category } from '$lib/types';

const activityExpand = 'activity(activityList)';

export const load = (async ({ locals, params }) => {
	const activityList = await locals.pb
		.collection('activity_list')
		.getOne(params.activityListId, { expand: `category,${activityExpand}` })
		.then(structuredClone);

	return {
		activityList: activityList as ActivityList,
		activities: ((activityList as any).expand[activityExpand] as Activity[]) ?? [],
		category: (activityList as any).expand.category as Category
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	newActivity: async ({ request, params, locals }) => {
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
			if (e instanceof ClientResponseError) {
				return fail(400, {
					name: formData.get('name') as string,
					description: formData.get('description') as string,
					validationMessage: pbErrorToErrorString(e)
				});
			}
		}

		if (id) {
			return fail(201, {
				name: '',
				description: '',
				createdId: id,
				createdName: formData.get('name') as string
			});
		} else {
			throw error(500, 'Something went wrong creating an activity');
		}
	}
};
