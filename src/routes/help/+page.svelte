<style>
	dt {
		font-weight: bold;
	}

	img {
		max-width: 100%;
		border-radius: 20px;
		box-shadow: var(--sx-shadow-5);
	}
	h1,
	h2 {
		margin-bottom: 0;
	}
</style>

<Title title="Help" />

<div class="layout-medium">
	<Breadcrumbs links={breadcrumbs} />
</div>
<div class="layout-medium has-inline-links f-column gap-6">
	<h1>Help</h1>

	<p>
		Dice Chest is made up of three main parts, these are meant to help organize elements of an
		event, so you can plan events by selecting the <em>types</em> of activities you want to do, and letting
		Dice Chest help you pick the specifics.
	</p>

	<Fieldset legend="Glossary">
		<dl>
			<dt>Categories</dt>
			<dd>
				A collection of types of activities. Make a new category for each unique type of event you
				wish to plan. e.g. "Dates", "Hangouts", "LAN Parties".
			</dd>

			<dt>Activity Lists</dt>
			<dd>
				A collection of activities of the same type. For a "Date" category you might have lists for
				"Restaurants" and "Movies".
			</dd>

			<dt>Activities</dt>
			<dd>A thing you want to do. Like the name of a restaurant, or a video game.</dd>
		</dl>
	</Fieldset>

	<h2>Planning</h2>

	<div>
		<p>
			When planning a date night with your partner you just have to decide what types of activities
			you want to do, like:
		</p>
		<blockquote>
			"we want to go on a walk, do something while we're out, go to a restaurant, then come home and
			watch a movie,"
		</blockquote>
		<p>
			Plan events by clicking "<Icon icon="hat-wizard" /> Roll" on a category. Then select the types
			of activites you wish to do, and in what order. (You can even select an activity list multiple
			times!)
		</p>
	</div>

	<img src="/dates-roll.png" alt="selecting activity lists demo" class="pb-6" />

	<p>
		After selecting the activity lists you want, Dice Chest will pick a random itinerary. If you
		don't like any of the choices you can always hit "<Icon icon="hat-wizard" /> Reroll" to see a new
		option.
	</p>

	<img src="/dates-plan.png" alt="demo showing random date night plan" />

	<h2>Tips</h2>

	<div>
		<p>
			Add as many options as you can to your lists. The more options you have the more unique your
			plans will be. Any time you learn about a new restaurant you want to try or store you want to
			check out, add it to a list!
		</p>
	</div>
</div>

<script lang="ts">
	import { Breadcrumbs, Fieldset, Icon } from 'sheodox-ui';
	import Title from '$lib/Title.svelte';

	const breadcrumbs = [
		{
			text: 'Home',
			href: '/'
		},
		{ text: 'Help', href: '/help' }
	];
</script>
