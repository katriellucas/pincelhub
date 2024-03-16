import type { Snippet } from 'svelte';

export declare global {
	type Menu = {
		children: Snippet;
		content: Snippet;
		isOpen: boolean;
		onClose: (...args) => unknown;
		position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
		tag: 'div' | 'nav' | 'ol' | 'ul';
	};

	type MenuItem = {
		children: Snippet;
		divider?: boolean;
		href?: string;
		leading?: string;
		onclick?: (...args) => unknown;
		tag: 'a' | 'button' | 'div' | 'label' | 'li';
		trailing?: string;
		type?: 'material';
	};
}
