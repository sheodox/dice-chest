<Title title="Edit {data.category.name}" />

<div class="layout-narrow">
	<Breadcrumbs links={breadcrumbGen.categories.edit(data.category)} />

	<h1>Edit Category</h1>
	<div class="f-column gap-2 mt-2">
		<form action="?/update" method="POST" use:enhance class="f-column gap-2">
			{#if form?.validationMessage}
				<Alert variant="error">{form.validationMessage}</Alert>
			{/if}
			<CategoryForm name={data.category.name} />

			<button class="primary">Update</button>
		</form>

		<form class="f-column" action="?/delete" method="POST" on:submit={confirmDelete}>
			<button class="tertiary">Delete</button>
		</form>
	</div>
</div>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Breadcrumbs, Alert } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
	import CategoryForm from '$lib/CategoryForm.svelte';
	import Title from '$lib/Title.svelte';

	export let data;
	export let form;

	function confirmDelete(e: Event) {
		if (!confirm(`Are you sure you want to delete "${data.category.name}"`)) {
			e.stopPropagation();
			e.preventDefault();
		}
	}
</script>
