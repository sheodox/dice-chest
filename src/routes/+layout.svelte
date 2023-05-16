<!-- svelte-ignore css-unused-selector -->
<style global lang="scss">
	@import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

	main .main-content {
		width: 80rem;
		max-width: 90vw;
		margin: 0 auto;
	}

	// forms or form containers for narrow, centered, pages containing just a form
	// for which a full width page would look weird
	.layout-narrow {
		margin: 0 auto;
		max-width: 100%;
		width: 30rem;

		textarea {
			height: 6rem;
		}
	}

	.layout-medium {
		margin: 0 auto;
		max-width: 100%;
		width: 55rem;
	}

	// used for printing errror messages, respecting activity description newlines
	.pre-line {
		white-space: pre-line;
	}

	// section headers in the sidebar
	.nav-heading {
		text-transform: uppercase;
		color: var(--sx-gray-75);
	}

	.card-list {
		gap: var(--sx-spacing-4);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));

		a.card {
			display: block;
		}
	}
	@media (max-width: 700px) {
		.card-list {
			grid-template-columns: 1fr;
		}
		.card-list a.card {
			flex-basis: auto;
		}
	}
</style>

<SheodoxUIStyles />

<Header appName="Dice Chest" {showMenuTrigger} bind:menuOpen href="/">
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
	<div class="f-1" class:p-4={!onHomepage}>
		<section class="f-column" class:main-content={!onHomepage}>
			<slot />
		</section>
	</div>
</main>

<Footer />

<script lang="ts">
	import { page } from '$app/stores';
	import { linkGen } from '$lib/breadcrumbs';
	import { Icon, SheodoxUIStyles, Header, Toasts, Sidebar } from 'sheodox-ui';
	import Footer from '$lib/Footer.svelte';

	export let data;
	$: onHomepage = !data.user && $page.url.pathname === '/';
	$: showMenuTrigger = !!data.user;

	let menuOpen = false;
</script>
