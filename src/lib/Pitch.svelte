<style lang="scss">
	.hero {
		flex-direction: row;
		justify-content: center;
		min-height: 80vh;
	}
	.hero-title,
	.hero-subtitle {
		max-width: 90vw;
		width: 60rem;
	}
	.hero-title {
		font-size: var(--sx-font-size-10);
	}
	.hero-subtitle {
		font-size: var(--sx-font-size-8);
	}
	section {
		position: relative;
		padding-top: var(--sx-spacing-10);
		padding-bottom: var(--sx-spacing-10);
		width: 100%;
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section:nth-of-type(even) {
		background: var(--sx-gray-800);
	}
	.hero-image {
		background-image: url('/unsplash-dice.jpg');
		background-size: cover;
		background-position: center;
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
	@media (max-width: 600px) {
		.hero-title {
			font-size: var(--sx-font-size-8);
		}
		.hero-subtitle {
			font-size: var(--sx-font-size-6);
		}
	}

	section:not(.hero) {
		img {
			border-radius: 20px;
		}

		> * {
			width: 80rem;
			max-width: calc(100% - 2 * var(--sx-spacing-4));
			margin-left: var(--sx-spacing-4);
			margin-right: var(--sx-spacing-4);
		}
		p {
			font-size: var(--sx-font-size-6);
		}
	}
</style>

<section class="hero">
	<div class="hero-image" />
	<div class="p-4">
		<p class="hero-title">
			<Icon icon="dice-d20" />
			Plan things with just the broad strokes. Let Dice Chest decide the specifics.
		</p>

		<p class="hero-subtitle">
			Create and organize lists of activities, then let our wizards throw the dice to plan your
			events.
		</p>
	</div>
</section>

<section class="guide">
	<h1 class="m-0">How it works</h1>
	<p class="py-6">
		I made Dice Chest to plan date nights with my wife. We have lists of activities for restaurants,
		movies, shows, etc.
	</p>
	<img src="/dates-categories.png" alt="category list demo" />

	<p class="py-6">
		Planning a date night is as simple as selecting the order we want to do the different types of
		activities.
	</p>

	<img src="/dates-roll.png" alt="selecting activity lists demo" />

	<p class="py-6">Then Dice Chest will plan a date with random activities from our lists.</p>

	<img src="/dates-plan.png" alt="demo showing random date night plan" />
</section>

<section class="has-inline-links">
	<h1>Endless Uses</h1>

	<p>
		Have a ton of ideas but can't decide what to do? Use Dice Chest to plan dates, parties,
		vacations, or your evening tonight.
	</p>

	<p>
		<a href="/login" class="button primary">Login</a>
		<a href="/register" class="button inverted">Register</a>
	</p>
</section>

<script lang="ts">
	import { Icon } from 'sheodox-ui';
</script>
