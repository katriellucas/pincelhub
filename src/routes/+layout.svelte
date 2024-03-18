<script lang="ts">
	import '../styles/index.scss';
	import { theme, window as w } from '$lib/managers';
	// import { outcomps } from '$lib/runtime-comps.svelte';

	let { children, data } = $props();

	let isLoaded = $state(false);

	$effect(() => {
		isLoaded = !!w.innerWidth;
	});
</script>

<svelte:window
	bind:innerWidth={w.innerWidth}
	bind:innerHeight={w.innerHeight}
/>

<div id="root" data-theme={theme?.colorScheme}>
	{@render children()}
	<!-- {#each outcomps.values() as { component, ...props }}
		<svelte:component this={component} {...props} />
	{/each} -->
</div>

<style>
	#root {
		background: var(--surface-container-low);
		color: var(--on-surface);
	}
</style>
