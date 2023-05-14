import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const activity = await locals.pb
		.collection('activity')
		.getOne(params.activityId, { expand: `activityList,activityList.category` })
		.then(structuredClone);

	return {
		activity,
		category: activity.expand.activityList.expand.category,
		activityList: activity.expand.activityList
	};
}) satisfies PageServerLoad;
