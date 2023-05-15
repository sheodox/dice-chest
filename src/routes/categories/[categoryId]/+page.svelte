<Breadcrumbs links={breadcrumbGen.categories.show(data.category)} />

<div class="f-row justify-content-between align-items-center">
	<h1>{data.category.name}</h1>
	<div>
		<a class="button primary" href={linkGen.categories.roll(data.category.id)}>
			<Icon icon="hat-wizard" />
			Roll
		</a>
		<a class="button tertiary" href={linkGen.categories.edit(data.category.id)}>
			<Icon icon="pen" />
			Edit
		</a>
	</div>
</div>

<div class="f-row justify-content-between align-items-center">
	<h2>Activity Lists</h2>
	<a class="button secondary" href={linkGen.activityLists.new(data.category.id)}
		>New Activity List</a
	>
</div>

<div class="f-row f-wrap gap-4">
	{#each data.activityLists as list}
		<a class="card clickable p-4" href={linkGen.activityLists.show(list.id)}>
			<span class="card-title">
				{list.name}
			</span></a
		>
	{/each}
</div>

<script lang="ts">
	import { Breadcrumbs, MenuButton, Icon } from 'sheodox-ui';
	import { breadcrumbGen, linkGen } from '$lib/breadcrumbs';

	export let data;

	const options = [
		{
			text: 'Edit',
			icon: 'edit',
			href: ''
		},
		{
			text: 'Delete',
			icon: 'trash',
			href: ''
		}
	];
</script>
