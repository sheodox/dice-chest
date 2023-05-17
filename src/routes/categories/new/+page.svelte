<form action="?/newCategory" method="POST" use:enhance class="layout-narrow">
	<Breadcrumbs links={breadcrumbGen.categories.new()} />

	<h1>New Category</h1>
	<div>
		<p>
			Categories are usually different types of events you want to plan, like dates, hangouts with
			friends, or a day off.
		</p>
	</div>

	<div class="f-column gap-2 mt-2">
		{#if form?.validationMessage}
			<Alert variant="error">{form.validationMessage}</Alert>
		{/if}
		<CategoryForm bind:name />

		<button class="primary" use:ripple>Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Alert, Breadcrumbs, ripple } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
	import CategoryForm from '$lib/CategoryForm.svelte';

	export let form;

	let name = form?.name ?? '';
</script>
