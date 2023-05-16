import type { Activity, ActivityList, Category } from '$lib/types';
import type { PageServerLoad } from './$types';

const activityExpand = 'activity(activityList)';

export const load = (async ({ locals, params }) => {
	const activityList = await locals.pb
		.collection('activity_list')
		.getOne(params.activityListId, { expand: `category,${activityExpand}` })
		.then(structuredClone);

	return {
		activityList: activityList as ActivityList,
		category: (activityList as any).expand.category as Category,
		activities: ((activityList as any).expand[activityExpand] as Activity[]) ?? []
	};
}) satisfies PageServerLoad;
