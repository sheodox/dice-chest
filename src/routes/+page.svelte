<Title />

{#if data.user}
	<p>Open the sidebar and select or create a category!</p>
{:else}
	<p>You aren't logged in! Select Register or Login above</p>
{/if}

<script lang="ts">
	import Title from '$lib/Title.svelte';
	export let data;
</script>
