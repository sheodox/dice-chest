import type { Activity, ActivityList, Category } from '$lib/types';
import type { PageServerLoad } from './$types';

const activityExpand = 'activity(activityList)';

export const load = (async ({ locals, params, url }) => {
	const category = (await locals.pb
		.collection('category')
		.getOne(params.categoryId)
		.then(structuredClone)) as Category;

	const listIds = url.searchParams.get('listIds')?.split(',') ?? [],
		lists: Record<string, ActivityList> = {},
		activities: Record<string, Activity[]> = {};

	await Promise.all(
		Array.from(new Set(listIds)).map(async (listId: string) => {
			const list = (await locals.pb
				.collection('activity_list')
				.getOne<ActivityList>(listId, {
					expand: activityExpand
				})
				.then(structuredClone)) as ActivityList;

			lists[listId] = list;
			activities[listId] = list.expand[activityExpand] as Activity[];
		})
	);

	return {
		category: category,
		listIds,
		lists,
		activities
	};
}) satisfies PageServerLoad;
