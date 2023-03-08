import type { PageLoad } from './$types';
import type { Statik } from '$lib/api';
import { STATIK_URL } from '$lib/const';

export const load = (async ({ fetch, params }) => {
	console.debug('dir.ts params:', params);
	const res = await fetch(STATIK_URL(params.dir ? params.dir + '/' + params.file : params.file));
	if (!res.ok) {
		throw new Error(`Failed to load manifest at ${STATIK_URL(params.dir)}`);
	}
	const manifest: Statik = await res.json();
	return {
		manifest
	};
}) satisfies PageLoad;