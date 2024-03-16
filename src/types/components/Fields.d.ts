export declare global {
	type Checkbox = {
		checked?: boolean;
		label: string;
		name: string;
		required?: boolean;
		value?: string;
	};

	type RadioButton = {
		label: string;
		name: string;
		required?: boolean;
		value?: string;
	};

	type TextField = {
		background?: 'var(--surface)';
		disabled?: boolean;
		errorText?: string;
		icon?: string;
		label: string;
		leading?: Snippet;
		name: string;
		placeholder?: string;
		readonly?: boolean;
		required?: boolean;
		supportingText?: string;
		trailing?: Snippet;
		type?: 'text' | 'number' | 'password' | 'date' | 'email';
		value?: string;
	};

	type SelectField = {
		isOpen: boolean;
		label: string;
		leading?: Snippet;
		name: string;
		onclick?: (...args) => unknown;
		onClose: (...args) => unknown;
		options: Array<{ label: string; value: string }>;
		position?: 'bottom' | 'top';
		required?: boolean;
	};

	type Checkbox = {
		label: string;
		name: string;
		value?: string;
		required?: boolean;
		checked?: boolean;
	};

	type RadioButton = {
		label: string;
		name: string;
		value?: string;
		required?: boolean;
	};
}
