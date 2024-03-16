export declare global {
	type CommonButton = {
		files?: FileList;
		form?: string;
		href?: string;
		icon?: string;
		label: string;
		multiple?: boolean;
		onclick?: (...args) => unknown;
		target?: '_blank' | '_self' | '_parent' | '_top';
		type?: 'button' | 'file' | 'reset' | 'submit';
		visual: 'elevated' | 'filled' | 'outline' | 'text' | 'tonal';
		wide?: boolean;
	};

	type FAB = {
		files?: FileList;
		href?: string;
		icon?: string;
		label?: string;
		multiple?: boolean;
		onclick?: (...args) => unknown;
		size?: 'large' | 'medium' | 'small';
		target?: '_blank' | '_self' | '_parent' | '_top';
		type?: 'button' | 'file' | 'reset' | 'submit';
		visual: 'primary' | 'secondary' | 'surface' | 'tertiary';
	};

	type IconButton = {
		checked?: boolean;
		files?: FileList;
		href?: string;
		icon: string;
		multiple?: boolean;
		onclick?: (...args) => unknown;
		target?: '_blank' | '_self' | '_parent' | '_top';
		type?: 'button' | 'checkbox' | 'file' | 'reset' | 'submit';
		visual: 'filled' | 'outline' | 'standard' | 'tonal';
	};
}
