<form
	action="?/newActivity"
	method="POST"
	use:enhance={({ form, data, action, cancel, submitter }) => {
		return async ({ result, update }) => {
			await update();
			// if the user just created something we want to reset the form so they can keep
			// adding things, they can click the link in the success Alert if they want to go there
			if (result.status === 201) {
				name = '';
				description = '';
			}
		};
	}}
	class="layout-narrow"
>
	<Breadcrumbs links={breadcrumbGen.activities.new(data.category, data.activityList)} />

	<h1>New Activity</h1>
	<ActivityExplanation />

	<div class="f-column gap-2 mt-2">
		{#if form?.validationMessage}
			<Alert variant="error">{form.validationMessage}</Alert>
		{/if}
		{#if form?.createdId && form?.createdName}
			<Alert variant="success"
				>Created <a class="inline-link" href={linkGen.activities.show(form.createdId)}
					>"{form.createdName}"</a
				></Alert
			>
		{/if}

		<ActivityForm bind:name bind:description />

		{#if errors.duplicateName}
			<Alert variant="error">There's already an activity with that name in this list.</Alert>
		{/if}

		<input type="hidden" name="activityList" value={data.activityList.id} />
		<button class="primary" use:ripple {disabled}>Create</button>
		<p class="text-align-center">
			Have a list? <a href={linkGen.activities.newBulk(data.activityList.id)} class="inline-link"
				>Add in bulk.</a
			>
		</p>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Alert, Breadcrumbs, ripple } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';
	import ActivityForm from '$lib/ActivityForm.svelte';
	import ActivityExplanation from '$lib/explanations/ActivityExplanation.svelte';

	export let data;
	export let form;

	let errors = { duplicateName: false };
	let name = form?.name ?? '';
	let description = form?.description ?? '';

	$: errors.duplicateName = data.activities.some(
		(act) => act.name.toLowerCase() === name.trim().toLowerCase()
	);
	$: disabled = errors.duplicateName;
</script>
