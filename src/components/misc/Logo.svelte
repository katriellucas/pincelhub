<script lang="ts">
	let { href, children } = $props<Logo>();
</script>

<svelte:element this={href ? 'a' : 'span'} class="logo" {href}>
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 39" height="32">
		<path fill="blue" d="M16.5 2h21L22.2 25H1L16.5 2Z" />
		<path fill="red" d="m17.4 27.1-6 8.9h22.1L49 13H32.7l-9.5 14.1h-5.8Z" />
	</svg>
	{#if children}
		<span>{@render children()}</span>
	{/if}
</svelte:element>

<style lang="scss">
	.logo {
		align-items: center;
		display: flex;
		font: var(--title-large);
		gap: 12px;
	}
</style>
