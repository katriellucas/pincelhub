import type { Snippet } from 'svelte';

export declare global {
	type TopAppBar = {
		children: Snippet;
		sticky: string;
	};
}
