<Title />

{#if data.user}
	<Home categories={data.categories} />
{:else}
	<Pitch />
{/if}

<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Pitch from '$lib/Pitch.svelte';
	import Home from '$lib/Home.svelte';
	export let data;
</script>
