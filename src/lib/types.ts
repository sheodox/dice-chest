import type { Record } from 'pocketbase';

export type Category = Record & {
	id: string;
	name: string;
	user: unknown;
};

export type ActivityList = Record & {
	id: string;
	name: string;
	user: unknown;
	category: unknown;
};

export type Activity = Record & {
	id: string;
	name: string;
	user: unknown;
	activityList: unknown;
	description: string;
};
