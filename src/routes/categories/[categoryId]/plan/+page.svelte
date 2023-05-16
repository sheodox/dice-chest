<style>
	.card {
		flex-basis: 15rem;
		min-height: 10rem;
	}
</style>

<Title title="Plan {data.category.name}" />

<Breadcrumbs links={breadcrumbGen.categories.roll(data.category)} />

<div class="f-row justify-content-between align-items-center">
	<h1>{data.category.name}</h1>
	<div>
		<button class="primary" on:click={copyPlan} use:ripple><Icon icon="copy" />Copy Plan</button>
		<button on:click={generatePlan} class="tertiary" use:ripple
			><Icon icon="hat-wizard" /> Reroll All</button
		>
	</div>
</div>

<div class="f-column gap-6">
	<div class="card-list">
		{#each plan as item, index}
			{@const activityCount = data.activities[item.activityList.id]?.length ?? 0}
			<div class="card f-1 f-column">
				{#if item.activity}
					<p class="sx-font-size-4 px-2 m-0 card-title">
						{item.activity?.name ?? 'No activities!'}
					</p>
					<p class="sx-font-size-2 px-2 pre-line f-1 muted">{item.activity.description}</p>
					<button class="tertiary" on:click={() => reroll(index)} use:ripple
						><Icon icon="hat-wizard" /> Reroll?
					</button>
				{:else}
					<p class="muted sx-font-size-4 px-2 align-self-center f-1">No activities!</p>
				{/if}
				<p class="sx-badge-mint f-row justify-content-between gap-2">
					<span>{item.activityList.name}</span>
					<span>{activityCount} {activityCount === 1 ? 'activity' : 'activities'}</span>
				</p>
			</div>
		{/each}
	</div>
</div>

<script lang="ts">
	import { Breadcrumbs, ripple, Icon } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';
	import type { Activity, ActivityList } from '$lib/types';
	import Title from '$lib/Title.svelte';

	export let data;

	type Plan = {
		activityList: ActivityList;
		activity: Activity | null;
	}[];

	let plan: Plan = [];

	function generatePlanForList(listId: string) {
		const activityList = data.lists[listId],
			activities = data.activities[listId];

		return {
			activityList,
			activity: activities?.length
				? activities[Math.floor(Math.random() * activities.length)]
				: null
		};
	}

	function generatePlan() {
		plan = data.listIds.map((listId) => {
			return generatePlanForList(listId);
		});
	}

	generatePlan();

	function reroll(index: number) {
		plan[index] = generatePlanForList(data.listIds[index]);
	}

	function copyPlan() {
		const planStr = plan
			.filter((p) => !!p.activity)
			.map((p, index) => {
				return [`${index + 1}. ${p.activity!.name}`, p.activity!.description].join('\n').trim();
			})
			.join('\n\n');

		navigator.clipboard.writeText(planStr);
	}
</script>
