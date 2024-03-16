export const theme = $state({
	colorScheme: undefined,

	set: (color) => {
		theme.colorScheme =
			color || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
});
