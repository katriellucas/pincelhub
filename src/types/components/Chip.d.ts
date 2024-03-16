import type { Snippet } from 'svelte';

export declare global {
	type Chip = {
		children?: Snippet;
		href?: string;
		label: string;
		target?: '_blank' | '_self' | '_parent' | '_top';
		trailing?: Snippet;
		type?: 'action'; // TODO: support for 'checkbox' and 'radio'
		visual?: 'elevated' | 'surface';
	};
}
