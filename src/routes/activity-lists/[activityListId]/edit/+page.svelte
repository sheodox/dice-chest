<div class="single-form-page">
	<Breadcrumbs links={breadcrumbGen.activityLists.edit(data.category, data.activityList)} />

	<h1>Edit Activity List</h1>
	<div class="f-column gap-2 mt-2">
		<form action="?/update" method="POST" use:enhance class="f-column gap-2">
			<ActivityListForm name={data.activityList.name} />

			<button class="primary">Update</button>
		</form>

		<form class="f-column" action="?/delete" method="POST" on:submit={confirmDelete}>
			<input type="hidden" name="categoryId" value={data.activityList.category} />
			<button class="tertiary">Delete</button>
		</form>
	</div>
</div>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Breadcrumbs } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
	import ActivityListForm from '$lib/ActivityListForm.svelte';

	export let data;

	function confirmDelete(e: Event) {
		if (!confirm(`Are you sure you want to delete "${data.activityList.name}"`)) {
			e.stopPropagation();
			e.preventDefault();
		}
	}
</script>
