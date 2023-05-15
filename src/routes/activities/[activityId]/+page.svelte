<Title title={data.activity.name} />

<Breadcrumbs
	links={breadcrumbGen.activities.show(data.category, data.activityList, data.activity)}
/>

<div class="f-row justify-content-between align-items-center">
	<h1>{data.activity.name}</h1>

	<a class="button tertiary" href={linkGen.activities.edit(data.activity.id)}>
		<Icon icon="pen" />
		Edit
	</a>
</div>

<Fieldset legend="Description">
	{@const desc = data.activity.description.trim()}
	{#if desc}
		<p class="pre-line">{desc}</p>
	{:else}
		<p class="muted">No description</p>
	{/if}
</Fieldset>

<script lang="ts">
	import { Breadcrumbs, Fieldset, Icon } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';
	import Title from '$lib/Title.svelte';

	export let data;
</script>
