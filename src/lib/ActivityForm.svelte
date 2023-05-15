<TextInput name="name" bind:value={name} autofocus>Name</TextInput>

<label for="activity-description">Description</label>
<textarea id="activity-description" name="description" bind:value={description} />

<script lang="ts">
	import { TextInput } from 'sheodox-ui';

	export let name = '';
	export let description = '';
</script>
