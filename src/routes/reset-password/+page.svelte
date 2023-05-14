<form action="?/resetPassword" method="POST" use:enhance class="single-form-page">
	<h1 class="mb-0">Reset Password</h1>
	<p>You'll receive an email with a link to reset your password.</p>
	<div class="f-column gap-2 mt-2">
		{#if form?.success}
			<Alert variant="success">An email has been sent to reset your password.</Alert>
		{/if}
		<TextInput bind:value={email} name="email" type="email">Email</TextInput>
		<button class="primary" disabled={!email}>Request Password Reset</button>
	</div>
</form>

<script lang="ts">
	import { TextInput, Alert } from 'sheodox-ui';
	import { enhance } from '$app/forms';

	export let form;

	let email = '';
</script>
