import type { Activity, ActivityList, Category } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const activity = await locals.pb
		.collection('activity')
		.getOne(params.activityId, { expand: `activityList,activityList.category` })
		.then(structuredClone);

	return {
		activity: activity as Activity,
		category: (activity as any).expand.activityList.expand.category as Category,
		activityList: (activity as any).expand.activityList as ActivityList
	};
}) satisfies PageServerLoad;
