<form action="?/newActivityList" method="POST" use:enhance class="single-form-page">
	<Breadcrumbs links={breadcrumbGen.activityLists.new(data.category)} />

	<h1>New Activity List</h1>

	<div class="f-column gap-2 mt-2">
		{#if form?.validationMessage}
			<Alert variant="error">{form.validationMessage}</Alert>
		{/if}
		<ActivityListForm {name} />

		<button class="primary" use:ripple>Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Alert, Breadcrumbs, ripple } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
	import ActivityListForm from '$lib/ActivityListForm.svelte';

	export let data;
	export let form;

	let name = form?.name ?? '';
</script>
