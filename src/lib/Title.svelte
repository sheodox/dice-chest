<svelte:head>
	<title>{titleStr}</title>
</svelte:head>

<script lang="ts">
	const appName = 'Dice Chest';

	export let title = '';

	$: titleStr = title ? `${title} - ${appName}` : appName;
</script>
