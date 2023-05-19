<style>
	.card {
		flex-basis: 18rem;
	}
	.d-b {
		display: block;
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
			<div class="card-left">
				<a
					class="card-title d-b {activity.description ? 'px-4 pt-4' : 'p-4'}"
					href={linkGen.activities.show(activity.id)}
				>
					{activity.name}
				</a>
				{#if activity.description}
					<p class="card-body sx-font-size-2 px-4 m-0 d-b muted has-inline-links">
						<RichText text={activity.description} />
					</p>
				{/if}
			</div>
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
	import { Breadcrumbs, Icon, RichText } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';
	import Title from '$lib/Title.svelte';
	import ActivityExplanation from '$lib/explanations/ActivityExplanation.svelte';

	export let data;
</script>
