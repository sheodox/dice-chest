<div class="f-column gap-2">
	<div class="f-row f-wrap justify-content-between align-items-center">
		<h2 class="m-0">Pick activity for "{activityList.name}"</h2>
		<button class="tertiary" on:click={cancel}><Icon icon="times" /> Cancel</button>
	</div>

	<Search bind:value={searchText} label="Search Activities" />
</div>

<div class="card-list">
	{#each searchResults as activity}
		<div class="card gap-2 p-2 f-column">
			<button class="secondary" on:click={() => pick(activity)}>
				{activity.name}
			</button>
			{#if activity.description}
				<p class="card-body sx-font-size-2 px-4 m-0 d-b muted has-inline-links">
					<RichText text={activity.description} />
				</p>
			{/if}
		</div>
	{/each}
</div>

<script lang="ts">
	import { Icon, RichText, Search } from 'sheodox-ui';
	import type { Activity, ActivityList } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	export let activityList: ActivityList;
	export let activities: Activity[];

	let searchText = '';

	$: searchResults = search(activities, searchText);

	const dispatch = createEventDispatcher<{
		cancel: void;
		select: Activity;
	}>();

	function pick(activity: Activity) {
		dispatch('select', activity);
	}

	function cancel() {
		dispatch('cancel');
	}

	function search(activities: Activity[], searchText: string) {
		searchText = searchText.trim().toLowerCase();
		if (!searchText) {
			return activities;
		}

		const inName = activities.filter((a) => a.name.toLowerCase().includes(searchText));
		const inDescription = activities.filter((a) =>
			a.description.toLowerCase().includes(searchText)
		);

		const results: Activity[] = [...inName];

		// AFTER adding every result from searching names, add results from searching description,
		// as a name match has a higher relevance
		for (const activity of inDescription) {
			// don't add a duplicate activity to the resutls if it's already been found
			// by the name search
			if (!results.some((act) => act.id === activity.id)) {
				results.push(activity);
			}
		}

		return results;
	}
</script>
