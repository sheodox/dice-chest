<Title />

{#if data.user}
	<p>Open the sidebar and select or create a category!</p>
{:else}
	<Pitch />
{/if}

<script lang="ts">
	import Title from '$lib/Title.svelte';
	import Pitch from '$lib/Pitch.svelte';
	export let data;
</script>
