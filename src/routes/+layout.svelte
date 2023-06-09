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
		flex: 1;

		a.card {
			display: block;
		}
		.card-split {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.card-left {
				flex: 1;
			}
			// remove padding fromm the title, as long as it's not the only thing on the left
			.card-title:not(.card-left) {
				padding: 0;
			}
			.card-right {
				margin: var(--sx-spacing-4);
			}
		}
	}

	// used to style an empty state message in the category/list/activity selection grids
	.empty-grid {
		border-radius: 10px;
		width: 20rem;
		margin: var(--sx-spacing-8) auto;
		padding: var(--sx-spacing-4);
		border: 2px solid var(--sx-gray-500);
		background: var(--sx-gray-600);
		color: var(--sx-gray-75);
		display: flex;
		flex-direction: column;
		font-size: var(--sx-font-size-4);
		gap: var(--sx-spacing-4);

		p {
			margin: 0;
		}

		a {
			text-align: center;
			margin: 0;
		}
	}

	svg.logo {
		width: 2rem !important;
		height: 2rem !important;
	}

	@media (max-width: 700px) {
		.card-list a.card {
			flex-basis: auto;
		}
	}
	:root {
		--sx-hue-gray: 190 !important;
	}
</style>

<SheodoxUIStyles />

<Header appName="Dice Chest" {showMenuTrigger} bind:menuOpen href="/">
	<svg viewBox="0 0 512 512" slot="logo">
		<image xlink:href="/logo.svg" />
	</svg>
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
