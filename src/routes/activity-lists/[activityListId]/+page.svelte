<Breadcrumbs links={breadcrumbGen.activityLists.show(data.category, data.activityList)} />

<div class="f-row justify-content-between align-items-center">
	<h1>{data.activityList.name}</h1>
</div>

<div class="f-row justify-content-between align-items-center">
	<h2>Activities</h2>
	<a class="button secondary" href={linkGen.activities.new(data.activityList.id)}>New Activity</a>
</div>

{#each data.activities as activity}
	<a class="inline-link" href={linkGen.activities.show(activity.id)}>
		{activity.name}
	</a>
{/each}

<script lang="ts">
	import { Breadcrumbs } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';

	export let data;

	console.log(data);
</script>
