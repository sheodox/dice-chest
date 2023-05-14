<form action="?/newCategory" method="POST" use:enhance class="single-form-page">
	<Breadcrumbs links={breadcrumbGen.categories.new()} />

	<h1>New Category</h1>

	<div class="f-column gap-2 mt-2">
		<TextInput name="name" value="">Name</TextInput>

		<button class="primary">Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { TextInput, Breadcrumbs } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
</script>
