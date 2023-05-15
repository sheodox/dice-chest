<TextInput name="name" value={name}>Name</TextInput>

<label for="activity-description">Description</label>
<textarea id="activity-description" name="description" value={description} />

<script lang="ts">
	import { TextInput } from 'sheodox-ui';

	export let name = '';
	export let description = '';
</script>
