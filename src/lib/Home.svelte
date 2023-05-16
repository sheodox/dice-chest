<h1><Icon icon="dice-d20" /> Dice Chest</h1>

<p>Welcome to Dice Chest!</p>

<p>
	Get started by <a href={linkGen.categories.new()} class="inline-link">creating some categories</a
	>. You can also create and view your categories from the sidebar menu.
</p>

<p>
	For more detailed information, check out <a href="/help" class="inline-link">the help guide</a>.
</p>

{#if categories.length}
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
		{/each}
	</div>
{/if}

<script lang="ts">
	import { Icon } from 'sheodox-ui';
	import type { Category } from './types';
	import { linkGen } from './breadcrumbs';

	export let categories: Category[];
</script>
