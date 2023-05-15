import { redirect, type Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

// a list of all places the user needs to be logged in to view,
// users navigating to one of these places will be redirected
// if they are not authenticated
const topLevelAuthenticatedPaths = ['/app', '/categories', '/activity-lists', '/activities'];

export const handle: Handle = async ({ event, resolve }) => {
	// TODO use an environment variable or something
	event.locals.pb = new PocketBase(`http://${process.env.PB_HOST || '127.0.0.1'}:8090`);
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = structuredClone(event.locals.pb.authStore.model);
	} else {
		event.locals.user = null;

		// redirect unauthenticated users away from authenticated parts of the app
		if (topLevelAuthenticatedPaths.some((p) => event.url.pathname.startsWith(p))) {
			throw redirect(303, '/');
		}
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
