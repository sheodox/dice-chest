<form action="?/newActivityList" method="POST" use:enhance class="single-form-page">
	<Breadcrumbs links={breadcrumbGen.activityLists.new(data.category)} />

	<h1>New Activity List</h1>

	<div class="f-column gap-2 mt-2">
		<TextInput name="name" value="">Name</TextInput>

		<button class="primary">Create</button>
	</div>
</form>

<script lang="ts">
	import { enhance } from '$app/forms';
	import { TextInput, Breadcrumbs } from 'sheodox-ui';
	import { breadcrumbGen } from '$lib/breadcrumbs';

	export let data;
</script>
