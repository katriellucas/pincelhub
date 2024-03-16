<script lang="ts">
	let { children, leading, subtext, tag, trailing, type, ...props } = $props<ListItem>();
</script>

{#if type === 'material'}
	<svelte:element this={tag} class="list-item material ripple target" {...props}>
		{#if leading}
			<div class="leading">{@render leading()}</div>
		{/if}
		<div class="body">
			<span class="headline">{@render children()}</span>
			{#if subtext}
				<span class="subtext">{subtext}</span>
			{/if}
		</div>
		{#if trailing}
			<div class="trailing">{@render trailing()}</div>
		{/if}
	</svelte:element>
{:else}
	<svelte:element this={tag} class="list-item" {...props}>
		{@render children()}
	</svelte:element>
{/if}

<style lang="scss">
	.list-item {
		align-items: center;
		display: flex;
	}

	.material {
		align-items: center;
		background: var(--surface);
		justify-content: space-between;
		min-height: 56px;
		padding: 8px 16px;
	}
</style>
