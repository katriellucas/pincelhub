<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import Icon from '@iconify/svelte';

	let { children, divider, href, tag, type, leading, onclick, trailing } = $props<MenuItem>();
</script>

{#if type === 'material'}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<svelte:element this={tag} class="menu-item target ripple" {href} {onclick}>
		{#if leading}
			<Icon class="leading" icon={leading} />
		{/if}
		{@render children()}
		{#if trailing}
			<Icon class="trailing" icon={trailing} />
		{/if}
	</svelte:element>
	{#if divider}<Divider --margin="8px 0" />{/if}
{:else if children}
	{@render children()}
{/if}

<style lang="scss">
	.menu-item {
		align-items: center;
		color: var(--on-surface);
		display: flex;
		font: var(--label-large);
		height: 48px;
		padding: 0 12px;
		white-space: nowrap;
		width: 100%;

		:global(.leading) {
			color: var(--on-surface-variant);
			height: 24px;
			margin-right: 12px;
			min-width: 24px;
		}

		:global(.trailing) {
			color: var(--on-surface-variant);
			height: 24px;
			margin-left: 12px;
			min-width: 24px;
		}
	}
</style>
