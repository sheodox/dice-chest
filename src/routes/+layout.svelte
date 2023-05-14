<!-- svelte-ignore css-unused-selector -->
<style global lang="scss">
	@import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

	main .main-content {
		width: 80rem;
		max-width: 95vw;
		margin: 0 auto;
	}

	form.single-form-page {
		margin: 0 auto;
		max-width: 100%;
		width: 30rem;

		textarea {
			height: 6rem;
		}
	}

	.nav-heading {
		text-transform: uppercase;
		color: var(--sx-gray-75);
	}
</style>

<SheodoxUIStyles />

<Header appName="Dice Chest" showMenuTrigger={true} bind:menuOpen href="/">
	<div slot="headerEnd">
		{#if !data.user}
			<a href="/login" class="button primary">Login</a>
			<a href="/register" class="button inverted">Register</a>
		{:else}
			<form action="/logout" method="POST">
				<button>Logout</button>
			</form>
		{/if}
	</div>
</Header>

<Toasts />

<main class="f-row">
	<Sidebar bind:menuOpen docked={true}>
		<h1 slot="header">Dice Chest</h1>

		<div class="f-row justify-content-between align-items-center px-4">
			<h2 class="sx-font-size-3 nav-heading">Categories</h2>
			<a href="/categories/new" class="button secondary small" title="New Category"
				><Icon icon="plus" variant="icon-only" /><span class="sr-only">New Category</span></a
			>
		</div>
		<nav class="sx-sidebar-simple-links">
			{#each data.categories as category}
				<a href={linkGen.categories.show(category.id)}>{category.name}</a>
			{/each}
		</nav>
	</Sidebar>
	<div class="f-1 m-4">
		<section class="main-content f-column">
			<slot />
		</section>
	</div>
</main>

<script lang="ts">
	import { linkGen } from '$lib/breadcrumbs';
	import { Icon, SheodoxUIStyles, Header, Toasts, Sidebar } from 'sheodox-ui';

	export let data;

	let menuOpen = false;
</script>
