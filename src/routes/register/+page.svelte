<form action="?/register" method="POST" use:enhance class="single-form-page">
	<h1 class="mb-0">Register</h1>
	<a href="/login" class="fw-bold inline-link">Or sign in</a>
	<div class="f-column gap-2 mt-2">
		<TextInput value="" name="name">Name</TextInput>
		<TextInput value="" name="email">Email</TextInput>
		<TextInput value="" name="password" type="password">Password</TextInput>
		<TextInput value="" name="passwordConfirm" type="password">Confirm Password</TextInput>
		<button class="primary">Register</button>
	</div>
</form>

<script lang="ts">
	import { TextInput } from 'sheodox-ui';
	import { enhance } from '$app/forms';
</script>
