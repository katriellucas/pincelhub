<script lang="ts">
	let { children, href, type = 'button', visual, wide, ...props }: CommonButton = $props();
</script>

{#if href}
	<a {href} class="common-button target" {...props} class:wide>
		<span class="button ripple {visual}">
			{#if children}
				{@render children()}
			{/if}
		</span>
	</a>
{:else}
	<button {type} class="common-button target" {...props} class:wide>
		<span class="button ripple {visual}">
			{#if children}
				{@render children()}
			{/if}
		</span>
	</button>
{/if}

<style lang="scss">
	.common-button {
		align-items: center;
		border-radius: var(--corner-small);
		display: inline-flex;
		height: 48px;
		justify-content: center;
	}

	.button {
		align-items: center;
		border-radius: var(--corner-small);
		display: flex;
		font: var(--label-large);
		height: 40px;
		justify-content: center;
		padding: 0 24px;
		width: 100%;
	}

	.wide {
		width: 100%;
	}

	// COLORS OPTIONS 🎨
	.elevated {
		background: var(--surface-container-low);
		color: var(--primary);
	}

	.filled {
		background: var(--primary);
		color: var(--on-primary);
	}

	.tonal {
		background: var(--secondary-container);
		color: var(--on-secondary-container);
	}

	.outline {
		border: 1px solid var(--outline);
		color: var(--primary);
	}

	.text {
		color: var(--primary);
		padding: 0 12px;
	}
</style>
