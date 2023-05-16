import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { linkGen } from '$lib/breadcrumbs';
import { ClientResponseError } from 'pocketbase';
import { pbErrorToErrorString } from '$lib/util';
import type { ActivityList, Category } from '$lib/types';

export const load = (async ({ locals, params }) => {
	const activityList = await locals.pb
		.collection('activity_list')
		.getOne(params.activityListId, { expand: 'category' })
		.then(structuredClone);

	return {
		activityList: activityList as ActivityList,
		category: (activityList as any).expand.category as Category
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	bulk: async ({ request, locals }) => {
		if (!locals.user) {
			return;
		}

		const formData = await request.formData();

		const activities = JSON.parse(
				(formData.get('activitiesStringified') as string) ?? '[]'
			) as string[],
			activityList = formData.get('activityList') as string;

		if (!activityList || !activities.length) {
			return fail(400, {
				validationMessage: 'Enter some activities'
			});
		}

		const hasInvalidLengthActivity = activities.some((a) => a.length < 2);

		if (hasInvalidLengthActivity) {
			return fail(400, {
				validationMessage: 'All activity names must be at least two characters',
				activitiesRaw: formData.get('activitiesRaw') as string
			});
		}

		try {
			for (const activity of activities) {
				await locals.pb.collection('activity').create({
					name: activity,
					activityList,
					user: locals.user.id
				});
			}
		} catch (e) {
			console.log('Error bulk creating activity: ', e);

			if (e instanceof ClientResponseError) {
				return fail(400, {
					validationMessage: pbErrorToErrorString(e),
					activitiesRaw: formData.get('activitiesRaw') as string
				});
			} else {
				throw error(500, 'Something went wrong bulk creating activities');
			}
		}

		throw redirect(303, linkGen.activityLists.show(formData.get('activityList') as string));
	}
};
