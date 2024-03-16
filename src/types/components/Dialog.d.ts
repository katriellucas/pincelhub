import type { Snippet } from 'svelte';

export declare global {
	type Dialog = {
		actions?: Snippet;
		children?: Snippet;
		footer?: Snippet;
		fullscreen?: boolean;
		headline?: string;
		header: Snippet;
		icon?: string;
		onClose?: (...args) => unknown;
		text?: string;
	};
}
