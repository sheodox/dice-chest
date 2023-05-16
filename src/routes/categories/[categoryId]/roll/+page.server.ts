import type { ActivityList, Category } from '$lib/types';
import type { PageServerLoad } from './$types';

const activityListExpand = 'activity_list(category)';

export const load = (async ({ locals, params }) => {
	const category = await locals.pb
		.collection('category')
		.getOne(params.categoryId, { expand: activityListExpand })
		.then(structuredClone);

	return {
		category: category as Category,
		activityLists: ((category as any).expand[activityListExpand] ?? []) as ActivityList[]
	};
}) satisfies PageServerLoad;
