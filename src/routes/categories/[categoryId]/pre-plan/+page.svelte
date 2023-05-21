<Title title="Roll {data.category.name}" />

<Breadcrumbs links={breadcrumbGen.categories.prePlan(data.category)} />

<div class="f-row justify-content-between align-items-center">
	<h1>{data.category.name}</h1>
</div>

<div class="f-column gap-6">
	<Fieldset legend="The Plan" size="large">
		{#if !chosen.length}
			<p class="muted text-align-center">
				Select a sequence of activity lists below to plan your event.
			</p>
		{:else}
			{#each chosen as choice, index}
				<button class="sx-badge-cyan pill p-2" on:click={() => removeChoice(index)}>
					{index + 1}.
					{choice.name}
					<Icon icon="times" />
				</button>
			{/each}
			<div class="f-row justify-content-end">
				<a class="button primary" href={linkGen.categories.plan(data.category.id, chosenIds)}
					><Icon icon="hat-wizard" />Roll</a
				>
			</div>
		{/if}
	</Fieldset>
	<div class="card-list">
		{#each data.activityLists as list}
			<button
				class="card clickable p-4 text-align-left gap-2 f-column fw-normal align-items-start"
				on:click={() => addChoice(list)}
			>
				<div class="card-title p-0">{list.name}</div>
				<div class="sx-badge-cyan m-0">
					{list.activityCount}
					{list.activityCount === 1 ? 'Activity' : 'Activities'}
				</div>
			</button>
		{/each}
	</div>
</div>

<script lang="ts">
	import { Breadcrumbs, Fieldset, Icon } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';
	import Title from '$lib/Title.svelte';
	import type { ActivityList } from '$lib/types';

	export let data;

	let chosen: (ActivityList & { activityCount: number })[] = [];
	$: chosenIds = chosen.map(({ id }: { id: string }) => id).join(',');

	// todo use a real type
	function addChoice(list: any) {
		chosen.push(list);
		chosen = chosen;
	}

	function removeChoice(index: number) {
		chosen.splice(index, 1);
		chosen = chosen;
	}
</script>
