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

<p>Welcome to Dice Chest!</p>

<p>
	Get started by <a href={linkGen.categories.new()} class="inline-link">creating some categories</a
	>. You can also create and view your categories from the sidebar menu.
</p>

<p>
	For more detailed information, check out <a href="/help" class="inline-link">the help guide</a>.
</p>

<h2>Categories</h2>
<div class="card-list">
	{#each categories as category}
		<a href={linkGen.categories.show(category.id)} class="card clickable p-4">
			<div class="card-title p-0 f-row justify-content-between align-items-start">
				<div class="card-title p-0">{category.name}</div>
				<a href={linkGen.categories.roll(category.id)} class="button primary small" title="Roll">
					<Icon icon="hat-wizard" variant="icon-only" />
					<span class="sr-only">Roll</span>
				</a>
			</div>
		</a>
	{:else}
		<div class="empty-grid">
			<p>You don't have any categories yet.</p>
			<p>
				Categories are usually different types of events you want to plan, like dates, hangouts with
				friends, or a day off.
			</p>
			<a href={linkGen.categories.new()} class="button primary">Make a Category</a>
		</div>
	{/each}
</div>

<script lang="ts">
	import { Icon } from 'sheodox-ui';
	import type { Category } from './types';
	import { linkGen } from './breadcrumbs';

	export let categories: Category[];
</script>
