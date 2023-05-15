<form action="?/bulk" method="POST" use:enhance class="single-form-page f-column">
	<Breadcrumbs links={breadcrumbGen.activities.new(data.category, data.activityList)} />

	<h1>Bulk New Activity</h1>

	{#if form?.validationMessage}
		<Alert variant="error"><span class="pre-line">{form.validationMessage}</span></Alert>
	{/if}

	<label for="bulk-activities"> Activities </label>
	<textarea name="activitiesRaw" bind:value={bulkActivities} />

	<div class="f-column gap-2 mt-2">
		<input type="hidden" name="activityList" value={data.activityList.id} />

		<input type="hidden" name="activitiesStringified" value={activitiesStringified} />

		{#if error}
			<Alert variant="error">{error}</Alert>
		{/if}
		<button class="primary" {disabled} use:ripple>Create</button>
	</div>

	<Fieldset legend="Activities Detected">
		<ul>
			{#each activities as act}
				<li>
					{act}
					{#if act.length < 2}
						<span class="sx-badge-red">Too short!</span>
					{/if}
				</li>
			{/each}
		</ul>
	</Fieldset>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Alert, Fieldset, Breadcrumbs, ripple } from 'sheodox-ui';
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

	$: activitiesStringified = JSON.stringify(activities);

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
</script>
