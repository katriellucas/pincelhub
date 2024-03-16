import type { Snippet } from 'svelte';

export declare global {
	type Link = {
		children: Snippet;
		href: string;
		onclick?: (...args) => unknown;
		target?: string;
	};
}
