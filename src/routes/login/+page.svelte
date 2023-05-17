<Title title="Login" />

<form action="?/login" method="POST" use:enhance class="layout-narrow">
	<Breadcrumbs links={breadcrumbs} />
	<h1 class="mb-0">Login</h1>
	<a href="/register" class="fw-bold inline-link">Or register</a>
	<div class="f-column gap-2 mt-2">
		{#if error}
			<Alert variant="error">{error}</Alert>
		{/if}
		{#if isNewUser}
			<Alert variant="info">Check your email for a verification link before logging in.</Alert>
		{/if}
		{#if form?.notVerified}
			<Alert variant="warning">
				<div class="f-row align-items-center">
					<span>You must verify your email before logging in.</span>
					{#if submittedEmail}
						<form method="POST" action="?/resendVerification" use:enhance>
							<input type="hidden" value={submittedEmail} name="email" />
							<button class="tertiary">Resend</button>
						</form>
					{/if}
				</div>
			</Alert>
		{/if}
		{#if form?.successMessage}
			<Alert variant="success">{form.successMessage}</Alert>
		{/if}
		{#if form?.validationMessage}
			<Alert variant="error"><span class="pre-line">{form.validationMessage}</span></Alert>
		{/if}
		<TextInput bind:value={email} name="email">Email</TextInput>
		<TextInput bind:value={password} name="password" type="password">Password</TextInput>
		<button class="primary" {disabled}>Login</button>
		<a class="inline-link text-align-center" href="/reset-password">Forgot password?</a>
	</div>
</form>

<script lang="ts">
	import { page } from '$app/stores';
	import { TextInput, Alert, Breadcrumbs } from 'sheodox-ui';
	import { enhance } from '$app/forms';
	import Title from '$lib/Title.svelte';

	export let form;
	$: submittedEmail = form?.email ?? '';

	let email = submittedEmail,
		password = '',
		error = '';

	const isNewUser = $page.url.searchParams.get('new') === 'true';

	$: disabled = checkDisabled(email, password);

	function checkDisabled(email: string, password: string) {
		error = '';
		if (!email || !password) {
			error = 'All fields are required';
			return true;
		}

		if (password.length < 8) {
			error = 'Password too short';
			return true;
		}

		return false;
	}

	const breadcrumbs = [
		{
			text: 'Home',
			href: '/'
		},
		{
			text: 'Login'
		}
	];
</script>
