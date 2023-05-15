<form action="?/newCategory" method="POST" use:enhance class="single-form-page">
	<Breadcrumbs links={breadcrumbGen.categories.new()} />

	<h1>New Category</h1>

	<div class="f-column gap-2 mt-2">
		<CategoryForm />

		<button class="primary">Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Breadcrumbs } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
	import CategoryForm from '$lib/CategoryForm.svelte';
</script>
