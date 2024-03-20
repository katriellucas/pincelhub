<script lang="ts">
	import { slide } from 'svelte/transition';

	let { children, content, isOpen, onClose, tag, position } = $props<Menu>();
	let clientHeight: number = $state(0);
	let menu: HTMLElement | undefined = $state();

	let inset = $derived.by(() => {
		switch (position) {
			case 'top-left':
				return `auto auto ${clientHeight}px 0`;
			case 'top-right':
				return `auto 0 ${clientHeight}px auto`;
			case 'bottom-right':
				return `${clientHeight}px 0 auto auto`;
			case 'bottom-left':
				return `${clientHeight}px auto auto 0`;
		}
	});
</script>

<svelte:document
	onclick={(e) => {
		if (menu && isOpen) {
			const childrens = Array.from((menu.childNodes[0] as HTMLElement).querySelectorAll("*"));
			if (!childrens.includes((e.target as Element))) onClose();
		}
	}}
/>

<div class="menu" bind:this={menu}>
	<div bind:clientHeight>
		{@render children()}
	</div>

	{#if content && isOpen}
		<svelte:element
			this={tag}
			class="content"
			style:inset
			transition:slide={{ duration: 150, axis: 'y' }}
		>
			{@render content()}
		</svelte:element>
	{/if}
</div>

<style lang="scss">
	.menu {
		position: relative;
	}

	.content {
		background: var(--surface-container-high);
		border-radius: var(--corner-small);
		max-height: 240px;
		max-width: 280px;
		min-width: 112px;
		overflow-y: auto;
		padding: 8px 0;
		position: absolute;
		transform: translate(var(--offset, auto));
		z-index: 3;

		@media (min-height: 760px) {
			max-height: 300px;
		}

		@media (min-height: 854px) {
			max-height: 347px;
		}

		@media (min-height: 914px) {
			max-height: 377px;
		}

		@media (min-height: 1080px) {
			max-height: 460px;
		}
	}
</style>
