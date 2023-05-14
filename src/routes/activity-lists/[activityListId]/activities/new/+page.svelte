<form action="?/newActivity" method="POST" use:enhance class="single-form-page">
	<Breadcrumbs links={breadcrumbGen.activities.new(data.category, data.activityList)} />

	<h1>New Activity</h1>

	<div class="f-column gap-2 mt-2">
		<TextInput name="name" value="">Name</TextInput>
		<input type="hidden" name="activityList" value={data.activityList.id} />

		<label for="activity-description">Description</label>
		<textarea id="activity-description" name="description" />

		<button class="primary">Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { TextInput, Breadcrumbs } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';

	export let data;
</script>
