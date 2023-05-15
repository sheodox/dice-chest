<form action="?/newActivity" method="POST" use:enhance class="single-form-page">
	<Breadcrumbs links={breadcrumbGen.activities.new(data.category, data.activityList)} />

	<h1>New Activity</h1>

	<div class="f-column gap-2 mt-2">
		<input type="hidden" name="activityList" value={data.activityList.id} />
		<ActivityForm />

		<button class="primary">Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { TextInput, Breadcrumbs } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';
	import ActivityForm from '$lib/ActivityForm.svelte';

	export let data;
</script>
