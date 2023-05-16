<Title title="About" />

<div class="layout-narrow">
	<Breadcrumbs links={breadcrumbs} />
</div>
<div class="layout-narrow has-inline-links">
	<h1>About</h1>
	<p>Dice Chest is built by <ExternalLink href="https://sheodox.com/">sheodox</ExternalLink>.</p>

	<p>
		Feel free to request features or report issues by <ExternalLink
			href="mailto:support@dicechest.com">emailing me</ExternalLink
		>!
	</p>

	<h2>Other Project By Me</h2>

	<p>
		<ExternalLink href="https://sheodox.com/">Check out my other projects!</ExternalLink> I have several
		projects both for productivity and learning Japanese, you might find something you like!
	</p>

	<h2>Why "Dice Chest"</h2>
	<p>
		It's inspired by rolling dice in role playing games. Conceptually I thought of the site as a
		treasure chest full of d20s.
	</p>

	<h2>Support Development</h2>
	<p>
		If you'd like to donate to support development of Konshuu you can tip me on <ExternalLink
			href="https://www.buymeacoffee.com/sheodox">Buy me a coffee</ExternalLink
		>. Any support is appreciated, either financially or by sharing the site with your friends!
	</p>
</div>

<script lang="ts">
	import { Breadcrumbs } from 'sheodox-ui';
	import Title from '$lib/Title.svelte';
	import ExternalLink from '$lib/ExternalLink.svelte';

	const breadcrumbs = [
		{
			text: 'Home',
			href: '/'
		},
		{ text: 'About', href: '/about' }
	];
</script>
