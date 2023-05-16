<style>
	.hero {
		flex-direction: row;
		justify-content: center;
		min-height: 50rem;
	}
	.hero-title {
		font-size: var(--sx-font-size-11);
	}
	.hero-subtitle {
		font-size: var(--sx-font-size-8);
	}
	section {
		position: relative;
		padding-top: var(--sx-spacing-10);
		padding-bottom: var(--sx-spacing-10);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section > * {
		width: 80rem;
		max-width: 100%;
	}

	section:nth-of-type(even) {
		background: var(--sx-gray-800);
	}
	.guide p {
		font-size: var(--sx-font-size-6);
	}
	.hero-image {
		background-image: url('/unsplash-dice.jpg');
		background-size: cover;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		opacity: 0.1;
		pointer-events: none;
	}
</style>

<section class="hero">
	<div class="hero-image" />
	<div>
		<h1 class="hero-title">
			<Icon icon="dice-d20" />
			Dice Chest is your decision maker.
		</h1>

		<p class="hero-subtitle">
			Create and organize lists of activities, then let our wizards throw the dice.
		</p>
	</div>
</section>

<section class="guide">
	<h1 class="m-0">How it works</h1>
	<p class="py-6">
		I made Dice Chest to plan date nights with my wife. We have lists of activities for restaurants,
		movies, shows, etc.
	</p>
	<img src="/dates-categories.png" alt="category list demo" class="pb-6" />

	<p class="py-6">
		Planning a date night is as simple as selecting the order we want to do the different types of
		activities.
	</p>

	<img src="/dates-roll.png" alt="selecting activity lists demo" class="pb-6" />

	<p class="py-6">Then just let Dice Chest select some random activities from our lists!</p>

	<img src="/dates-plan.png" alt="demo showing random date night plan" />
</section>

<script lang="ts">
	import { Icon } from 'sheodox-ui';
</script>
