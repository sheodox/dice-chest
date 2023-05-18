<form action="?/newActivityList" method="POST" use:enhance class="layout-narrow">
	<Breadcrumbs links={breadcrumbGen.activityLists.new(data.category)} />

	<h1>New Activity List</h1>

	<div class="f-column gap-2 mt-2">
		{#if form?.validationMessage}
			<Alert variant="error">{form.validationMessage}</Alert>
		{/if}
		<div>
			<ActivityListExplanation showNextHint />
		</div>

		<ActivityListForm bind:name />

		{#if duplicateName}
			<Alert variant="error"
				>There's already an activity list with that name in this category.</Alert
			>
		{/if}

		<button class="primary" use:ripple {disabled}>Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Alert, Breadcrumbs, ripple } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
	import ActivityListForm from '$lib/ActivityListForm.svelte';
	import ActivityListExplanation from '$lib/explanations/ActivityListExplanation.svelte';

	export let data;
	export let form;

	let name = form?.name ?? '';

	$: duplicateName = data.activityLists.some(
		(c) => c.name.toLowerCase() === name.trim().toLowerCase()
	);

	$: disabled = duplicateName;
</script>
