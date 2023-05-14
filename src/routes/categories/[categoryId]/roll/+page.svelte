<Breadcrumbs links={breadcrumbGen.categories.roll(data.category)} />

<div class="f-row justify-content-between align-items-center">
	<h1>{data.category.name}</h1>
</div>

<div class="f-column gap-6">
	<Fieldset legend="Chosen Lists">
		{#if !chosen.length}
			<p class="muted">Select one or more activity lists from the options below</p>
		{:else}
			{#each chosen as choice, index}
				<button class="sx-badge-mint pill p-2" on:click={() => removeChoice(index)}>
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
	<div class="f-row f-wrap gap-4">
		{#each data.activityLists as list}
			<button class="secondary pill" on:click={() => addChoice(list)}>
				{list.name}
			</button>
		{/each}
	</div>
</div>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Breadcrumbs, Fieldset, Icon } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';

	export let data;

	let chosen: (typeof data)['activityLists'] = [];
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
