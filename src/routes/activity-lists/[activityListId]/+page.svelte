<style>
	.card {
		flex-basis: 18rem;
	}
</style>

<Title title={data.activityList.name} />

<Breadcrumbs links={breadcrumbGen.activityLists.show(data.category, data.activityList)} />

<div class="f-row justify-content-between align-items-center">
	<h1>{data.activityList.name}</h1>
	<a class="button tertiary" href={linkGen.activityLists.edit(data.activityList.id)}>
		<Icon icon="pen" />
		Edit
	</a>
</div>

<div class="f-row justify-content-between align-items-center">
	<h2>Activities</h2>
	<a class="button secondary" href={linkGen.activities.new(data.activityList.id)}>New Activity</a>
</div>

<div class="f-row f-wrap gap-4">
	{#each data.activities as activity}
		<a class="card clickable p-4" href={linkGen.activities.show(activity.id)}>
			<div class="card-title p-0 f-row justify-content-between align-items-start">
				<span>{activity.name}</span>
				<a href={linkGen.activities.edit(activity.id)} class="button tertiary small" title="Edit">
					<Icon icon="pen" variant="icon-only" />
					<span class="sr-only">Edit</span>
				</a>
			</div>
			{#if activity.description}
				<div class="card-body sx-font-size-2 px-0 muted">{activity.description}</div>
			{/if}
		</a>
	{/each}
</div>

<script lang="ts">
	import { Breadcrumbs, Icon } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';
	import Title from '$lib/Title.svelte';

	export let data;
</script>
