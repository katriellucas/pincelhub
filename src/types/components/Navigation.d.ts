import type { Snippet } from 'svelte';

export declare global {
	type NavigationBar = {
		navigation: Array<{
			badge?: {
				count?: number;
				limit?: number;
			};
			href: string;
			icon: {
				active: string;
				deactive: string;
			};
			text?: string;
		}>;
	};

	type NavigationRail = {
		header?: Snippet;
		navigation: Array<{
			badge?: {
				count?: number;
				limit?: number;
			};
			href: string;
			icon: {
				active: string;
				deactive: string;
			};
			text?: string;
		}>;
	};
}
