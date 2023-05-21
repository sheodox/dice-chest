<style>
	.inline-link {
		font-weight: bold;
	}
</style>

<h1 class="f-row gap-4 align-items-center">
	<svg viewBox="0 0 512 512" style="width: 3rem; height: 3rem;">
		<image xlink:href="/logo.svg" />
	</svg>
	<span>Dice Chest</span>
</h1>

<div>
	<p>Welcome to Dice Chest!</p>

	<p>
		Get started by <a href={linkGen.categories.new()} class="inline-link"
			>creating some categories</a
		>. You can also create and view your categories from the sidebar menu.
	</p>

	<p>
		For more detailed information, check out <a href="/help" class="inline-link">the help guide</a>.
	</p>
</div>

<h2>Categories</h2>
<div class="card-list">
	{#each categories as category}
		<div class="card clickable card-split">
			<a class="card-title card-left p-4" href={linkGen.categories.show(category.id)}>
				{category.name}
			</a>
			<a
				href={linkGen.categories.prePlan(category.id)}
				class="button primary small card-right"
				title="Plan"
			>
				<Icon icon="hat-wizard" variant="icon-only" />
				<span class="sr-only">Plan</span>
			</a>
		</div>
	{:else}
		<div class="empty-grid">
			<p>You don't have any categories yet.</p>
			<CategoryExplanation />
			<a href={linkGen.categories.new()} class="button primary">Make a Category</a>
		</div>
	{/each}
</div>

<script lang="ts">
	import { Icon } from 'sheodox-ui';
	import type { Category } from './types';
	import { linkGen } from './breadcrumbs';
	import CategoryExplanation from '$lib/explanations/CategoryExplanation.svelte';

	export let categories: Category[];
</script>
