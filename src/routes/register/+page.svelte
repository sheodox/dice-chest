<form action="?/register" method="POST" use:enhance class="single-form-page">
	<h1 class="mb-0">Register</h1>
	<a href="/login" class="fw-bold inline-link">Or sign in</a>
	<div class="f-column gap-2 mt-2">
		{#if form?.validationMessage}
			<Alert variant="error"><span class="pre-line">{form.validationMessage}</span></Alert>
		{/if}
		<TextInput bind:value={name} name="name">Username</TextInput>
		<TextInput bind:value={email} name="email">Email</TextInput>
		<TextInput bind:value={password} name="password" type="password">Password</TextInput>
		<TextInput bind:value={passwordConfirm} name="passwordConfirm" type="password"
			>Confirm Password</TextInput
		>
		{#if error}
			<Alert variant="error">{error}</Alert>
		{/if}
		<button class="primary" {disabled}>Register</button>
	</div>
</form>

<script lang="ts">
	import { Alert, TextInput } from 'sheodox-ui';
	import { enhance } from '$app/forms';

	export let form;

	let error = '',
		name = form?.name ?? '',
		email = form?.email ?? '',
		password = form?.password ?? '',
		passwordConfirm = form?.passwordConfirm ?? '';
	$: disabled = checkDisabled(name, email, password, passwordConfirm);

	function checkDisabled(name: string, email: string, password: string, passwordConfirm: string) {
		error = '';
		if (!name || !email || !password || !passwordConfirm) {
			error = 'Fill out all fields!';
			return true;
		}

		if (password !== passwordConfirm) {
			error = `Passwords don't match`;
			return true;
		}

		if (password.length < 8) {
			error = 'Password too short';
			return true;
		}

		return false;
	}
</script>
