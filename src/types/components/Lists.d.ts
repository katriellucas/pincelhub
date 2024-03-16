import type { Snippet } from 'svelte';

export declare global {
	type List = {
		children: Snippet;
		tag: 'div' | 'nav' | 'ol' | 'ul';
	};

	type ListItem = {
		children: Snippet;
		href?: string;
		leading?: Snippet;
		onclick?: (...args) => unknown;
		subtext?: string;
		tag: 'a' | 'button' | 'label' | 'li';
		trailing?: Snippet;
		type?: 'material';
	};
}
