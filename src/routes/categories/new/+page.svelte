<form action="?/newCategory" method="POST" use:enhance class="layout-narrow">
	<Breadcrumbs links={breadcrumbGen.categories.new()} />

	<h1>New Category</h1>
	<div>
		<CategoryExplanation showNextHint />
	</div>

	<div class="f-column gap-2 mt-2">
		{#if form?.validationMessage}
			<Alert variant="error">{form.validationMessage}</Alert>
		{/if}
		<CategoryForm bind:name />
		{#if duplicateName}
			<Alert variant="error">There's already a category with that name.</Alert>
		{/if}

		<button class="primary" use:ripple {disabled}>Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Alert, Breadcrumbs, ripple } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
	import CategoryForm from '$lib/CategoryForm.svelte';
	import CategoryExplanation from '$lib/explanations/CategoryExplanation.svelte';

	export let data;
	export let form;

	let name = form?.name ?? '';

	$: duplicateName = data.categories.some(
		(c) => c.name.toLowerCase() === name.trim().toLowerCase()
	);

	$: disabled = duplicateName;
</script>
