interface Identifiable {
	name: string;
	id: string;
}

export const linkGen = {
	categories: {
		new: () => '/categories/new',
		show: (id: string) => `/categories/${id}`,
		edit: (id: string) => `/categories/${id}/edit`,
		roll: (id: string) => `/categories/${id}/roll`,
		plan: (id: string, listIds: string) => `/categories/${id}/plan?listIds=${listIds}`
	},
	activityLists: {
		base: (categoryId: string) => `/categories/${categoryId}`,
		new: (categoryId: string) => `/categories/${categoryId}/activity-lists/new`,
		show: (id: string) => `/activity-lists/${id}`,
		edit: (id: string) => `/activity-lists/${id}/edit`
	},
	activities: {
		base: (activityListId: string) => linkGen.activityLists.show(activityListId),
		new: (activityListId: string) => `/activity-lists/${activityListId}/activities/new`,
		newBulk: (activityListId: string) => `/activity-lists/${activityListId}/activities/new/bulk`,
		show: (id: string) => `/activities/${id}`,
		edit: (id: string) => `/activities/${id}/edit`
	}
};

export const breadcrumbGen = {
	categories: {
		base: () => {
			return [{ text: 'Home', href: '/' }];
		},
		new: () => {
			return [
				...breadcrumbGen.categories.base(),
				{
					text: 'New Category'
				}
			];
		},
		show: (category: Identifiable) => {
			return [
				...breadcrumbGen.categories.base(),
				{
					text: category.name,
					href: linkGen.categories.show(category.id)
				}
			];
		},
		edit: (category: Identifiable) => {
			return [
				...breadcrumbGen.categories.show(category),
				{
					text: 'Edit'
				}
			];
		},
		roll: (category: Identifiable) => {
			return [
				...breadcrumbGen.categories.show(category),
				{
					text: 'Roll'
				}
			];
		}
	},
	activityLists: {
		base: (category: Identifiable) => {
			return [...breadcrumbGen.categories.show(category)];
		},
		new: (category: Identifiable) => {
			return [
				...breadcrumbGen.categories.show(category),
				{
					text: 'New Activity List'
				}
			];
		},
		show: (category: Identifiable, list: Identifiable) => {
			return [
				...breadcrumbGen.categories.show(category),
				{
					text: list.name,
					href: linkGen.activityLists.show(list.id)
				}
			];
		},
		edit: (category: Identifiable, list: Identifiable) => {
			return [
				...breadcrumbGen.activityLists.show(category, list),
				{
					text: 'Edit'
				}
			];
		}
	},
	activities: {
		base: (category: Identifiable) => {
			return [...breadcrumbGen.categories.show(category)];
		},
		new: (category: Identifiable, activityList: Identifiable) => {
			return [
				...breadcrumbGen.activityLists.show(category, activityList),
				{
					text: 'New Activity'
				}
			];
		},
		show: (category: Identifiable, list: Identifiable, activity: Identifiable) => {
			return [
				...breadcrumbGen.activityLists.show(category, list),
				{
					text: activity.name,
					href: linkGen.activities.show(activity.id)
				}
			];
		},
		edit: (category: Identifiable, list: Identifiable, activity: Identifiable) => {
			return [
				...breadcrumbGen.activities.show(category, list, activity),
				{
					text: 'Edit'
				}
			];
		}
	}
};
