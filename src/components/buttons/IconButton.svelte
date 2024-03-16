<script lang="ts">
	import Icon from '@iconify/svelte';

	let { href, icon, type, target, onclick, visual, files, checked, multiple } =
		$props<IconButton>();
</script>

{#if type === 'file'}
	<label class="icon-button target">
		<input class="hidden" type="file" bind:files {multiple} />
		<span class="button ripple {visual}"><Icon {icon} /></span>
	</label>
{:else if type === 'checkbox'}
	<label class="icon-button target">
		<input type="checkbox" bind:checked hidden />
		<span class="button ripple standard" class:checked>
			<Icon {icon} />
		</span>
	</label>
{:else if href}
	<a class="icon-button target" {target} {onclick} {href}>
		<span class="button ripple {visual}"><Icon {icon} /></span>
	</a>
{:else}
	<button class="icon-button target" {onclick} {type}>
		<span class="button ripple {visual}"><Icon {icon} /></span>
	</button>
{/if}

<style lang="scss">
	.icon-button {
		align-items: center;
		border-radius: var(--corner-full);
		display: inline-flex;
		height: 48px;
		justify-content: center;
		width: 48px;
	}

	.button {
		align-items: center;
		border-radius: var(--corner-full);
		display: flex;
		height: 40px;
		justify-content: center;
		width: 40px;

		:global(.iconify) {
			height: 24px;
			width: 24px;
		}
	}

	// COLORS OPTIONS 🎨
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
		color: var(--on-surface-variant);
	}

	.standard {
		background: none;
		color: var(--on-surface-variant);
	}

	.checked {
		color: var(--primary);
	}
</style>
