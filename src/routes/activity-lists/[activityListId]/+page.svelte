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

<div class="card-list">
	{#each data.activities as activity}
		<div class="card clickable card-split">
			<a class="card-left" href={linkGen.activities.show(activity.id)}>
				<span class="card-title">
					{activity.name}
				</span>
				{#if activity.description}
					<p class="card-body sx-font-size-2 p-0 m-0 muted">{activity.description}</p>
				{/if}
			</a>
			<a
				href={linkGen.activities.edit(activity.id)}
				class="button tertiary small card-right"
				title="Edit"
			>
				<Icon icon="pen" variant="icon-only" />
				<span class="sr-only">Edit {activity.name}</span>
			</a>
		</div>
	{:else}
		<div class="empty-grid">
			<p>You don't have any activities in this list yet.</p>
			<ActivityExplanation />
			<a href={linkGen.activities.new(data.activityList.id)} class="button primary">
				Make an Activity
			</a>
		</div>
	{/each}
</div>

<script lang="ts">
	import { Breadcrumbs, Icon } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';
	import Title from '$lib/Title.svelte';
	import ActivityExplanation from '$lib/explanations/ActivityExplanation.svelte';

	export let data;
</script>
