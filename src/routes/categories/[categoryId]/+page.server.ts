import type { ActivityList, Category } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const category = await locals.pb
		.collection('category')
		.getOne(params.categoryId)
		.then(structuredClone);
	const activityLists = await locals.pb
		.collection('activity_lists_with_count')
		.getFullList({ categoryId: params.categoryId })
		.then(structuredClone);

	return {
		category: category as Category,
		activityLists: activityLists as (ActivityList & { activityCount: number })[]
	};
}) satisfies PageServerLoad;
