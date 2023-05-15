import type { ClientResponseError } from 'pocketbase';

export function pbErrorToErrorString(e: ClientResponseError) {
	// for rejections with no validation errors, give the overall error.
	// used when you enter the wrong email/password when logging in
	if (Object.keys(e.response.data).length === 0) {
		return e.response.message;
	}

	return Object.entries(e.response.data as Record<string, { message: string }>)
		.map(([name, { message }]) => {
			return `${name.at(0)?.toUpperCase() + name.substring(1)}: ${message}`;
		})
		.join('\n');
}
