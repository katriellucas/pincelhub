export declare global {
	type PlanCard = {
		description: string;
		features: string[];
		href: string;
		price: string;
		title: string;
		variant?: 'popular' | 'timeless';
	};

	type ServiceCard = {
		description: string;
		href: string;
		icon?: string;
		title: string;
	};
}
