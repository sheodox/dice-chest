<form action="?/login" method="POST" use:enhance class="single-form-page">
	<h1 class="mb-0">Login</h1>
	<a href="/register" class="fw-bold inline-link">Or register</a>
	<div class="f-column gap-2 mt-2">
		{#if form?.notVerified}
			<Alert variant="warning">You must verify your email before logging in.</Alert>
		{/if}
		<TextInput value="" name="email">Email</TextInput>
		<TextInput value="" name="password" type="password">Password</TextInput>
		<button class="primary">Login</button>
		<a class="inline-link text-align-center" href="/reset-password">Reset password?</a>
	</div>
</form>

<script lang="ts">
	import { TextInput, Alert } from 'sheodox-ui';
	import { enhance } from '$app/forms';

	export let form;
</script>
