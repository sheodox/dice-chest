<div class="single-form-page">
	<Breadcrumbs
		links={breadcrumbGen.activities.edit(data.category, data.activityList, data.activity)}
	/>

	<h1>Edit Activity</h1>
	<div class="f-column gap-2 mt-2">
		<form action="?/update" method="POST" use:enhance class="f-column gap-2">
			<ActivityForm name={data.activity.name} description={data.activity.description} />

			<button class="primary">Update</button>
		</form>

		<form class="f-column" action="?/delete" method="POST" on:submit={confirmDelete}>
			<input type="hidden" name="activityListId" value={data.activityList.id} />
			<button class="tertiary">Delete</button>
		</form>
	</div>
</div>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { Breadcrumbs } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
	import ActivityForm from '$lib/ActivityForm.svelte';

	export let data;

	function confirmDelete(e: Event) {
		if (!confirm(`Are you sure you want to delete "${data.activity.name}"`)) {
			e.stopPropagation();
			e.preventDefault();
		}
	}
</script>
