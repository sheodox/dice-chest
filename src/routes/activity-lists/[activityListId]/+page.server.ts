import type { PageServerLoad } from './$types';

const activityExpand = 'activity(activityList)';

export const load = (async ({ locals, params }) => {
	const activityList = await locals.pb
		.collection('activity_list')
		.getOne(params.activityListId, { expand: `category,${activityExpand}` })
		.then(structuredClone);

	return {
		activityList,
		category: activityList.expand.category,
		activities: activityList.expand[activityExpand] ?? []
	};
}) satisfies PageServerLoad;
