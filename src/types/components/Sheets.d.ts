import type { Snippet } from 'svelte';

export declare global {
	type BottomSheet = {
		children: Snippet;
		onClose: (...args) => unknown;
	};
}
