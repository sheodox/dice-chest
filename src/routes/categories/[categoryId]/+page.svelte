<style>
	.card {
		flex-basis: 18rem;
	}
</style>

<Title title={data.category.name} />

<Breadcrumbs links={breadcrumbGen.categories.show(data.category)} />

<div class="f-row justify-content-between align-items-center">
	<h1>{data.category.name}</h1>
	<div>
		{#if data.activityLists.length}
			<a class="button primary" href={linkGen.categories.roll(data.category.id)}>
				<Icon icon="hat-wizard" />
				Roll
			</a>
		{/if}
		<a class="button tertiary" href={linkGen.categories.edit(data.category.id)}>
			<Icon icon="pen" />
			Edit
		</a>
	</div>
</div>

<div class="f-row justify-content-between align-items-center">
	<h2>Activity Lists</h2>
	<a class="button secondary" href={linkGen.activityLists.new(data.category.id)}
		>New Activity List</a
	>
</div>

<div class="card-list">
	{#each data.activityLists as list}
		<a class="card clickable p-4" href={linkGen.activityLists.show(list.id)}>
			<div class="card-title p-0">
				{list.name}
				<br />
				<span class="sx-badge-cyan sx-font-size-3 m-0"
					>{list.activityCount} {list.activityCount === 1 ? 'Activity' : 'Activities'}</span
				>
			</div>
		</a>
	{:else}
		<div class="empty-grid">
			<p>You don't have any activity lists yet.</p>
			<ActivityListExplanation />
			<a href={linkGen.activityLists.new(data.category.id)} class="button primary"
				>Make an Activity List</a
			>
		</div>
	{/each}
</div>

<script lang="ts">
	import { Breadcrumbs, Icon } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';
	import Title from '$lib/Title.svelte';
	import ActivityListExplanation from '$lib/explanations/ActivityListExplanation.svelte';

	export let data;
</script>
