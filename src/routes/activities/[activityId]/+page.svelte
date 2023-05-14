<style>
	.description {
		white-space: pre-line;
	}
</style>

<Breadcrumbs
	links={breadcrumbGen.activities.show(data.category, data.activityList, data.activity)}
/>

<div class="f-row justify-content-between align-items-center">
	<h1>{data.activity.name}</h1>
	<!-- <a class="button primary" href={linkGen.activities.new(data.activityList.id)}>New Activity</a> -->
</div>

<Fieldset legend="Description">
	{@const desc = data.activity.description.trim()}
	{#if desc}
		<p class="description">{desc}</p>
	{:else}
		<p class="muted">No description</p>
	{/if}
</Fieldset>

<script lang="ts">
	import { Breadcrumbs, Fieldset } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';

	export let data;

	console.log(data);
</script>
