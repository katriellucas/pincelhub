import type { PageLoad } from './$types';

export const load = (async () => {
	return { 
		quotes: await fetch('https://dummyjson.com/quotes?limit=10').then(res => res.json()) };
}) satisfies PageLoad;