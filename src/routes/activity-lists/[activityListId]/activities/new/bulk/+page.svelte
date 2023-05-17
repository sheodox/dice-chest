<form action="?/bulk" method="POST" use:enhance class="layout-narrow f-column">
	<Breadcrumbs links={breadcrumbGen.activities.new(data.category, data.activityList)} />

	<h1>Bulk New Activity</h1>

	{#if form?.validationMessage}
		<Alert variant="error"><span class="pre-line">{form.validationMessage}</span></Alert>
	{/if}

	<p>Paste or type a list of activities, with each on their own line.</p>

	<label for="bulk-activities"> Activities </label>
	<textarea name="activitiesRaw" bind:value={bulkActivities} use:focus />

	{#if activities.length}
		<Fieldset legend="Activities that will be created">
			<ul>
				{#each activities as act}
					<li>
						{act}
						{#if act.length < 2}
							<span class="sx-badge-red">Too short!</span>
						{/if}
						{#if alreadyIncluded(act)}
							<span
								class="sx-badge-orange"
								title="An activity with this name already exists, a duplicate will not be created."
								>Already exists, skipping</span
							>
						{/if}
					</li>
				{/each}
			</ul>
		</Fieldset>
	{/if}

	<div class="f-column gap-2 mt-2">
		<input type="hidden" name="activityList" value={data.activityList.id} />

		<input type="hidden" name="activitiesStringified" value={activitiesStringified} />

		{#if error}
			<Alert variant="error">{error}</Alert>
		{/if}
		<button class="primary" {disabled} use:ripple>Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Alert, Fieldset, Breadcrumbs, ripple, focus } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';

	export let data;
	export let form;

	let bulkActivities = form?.activitiesRaw ?? '',
		error = '';
	$: activities = Array.from(
		new Set(
			bulkActivities
				.split('\n')
				.map((a) => a.trim())
				.filter((a) => !!a)
		)
	);

	// skip adding duplicates
	$: activitiesStringified = JSON.stringify(activities.filter((name) => !alreadyIncluded(name)));

	$: disabled = checkDisabled(activities);

	function checkDisabled(activities: string[]) {
		error = '';
		if (activities.length === 0) {
			error = 'Must include at least one activity';
			return true;
		}
		if (activities.some((a) => a.length < 2)) {
			error = 'All activities must be at least two characters';
			return true;
		}
		return false;
	}

	function alreadyIncluded(name: string) {
		return data.activities.some((act) => act.name.toLowerCase() === name.trim().toLowerCase());
	}
</script>
