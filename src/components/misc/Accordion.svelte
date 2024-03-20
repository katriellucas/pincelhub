<script lang="ts">
	import { slide } from 'svelte/transition';
	import IconButton from "$components/buttons/IconButton.svelte";

	let { children, title } = $props();

	let open = $state(false)
</script>

<div class="accordion">
	<button class="title" onclick={() => open = !open}>
		{title}
		<IconButton icon="mdi:chevron-{open ? 'up' : 'down'}" />
	</button>
	{#if open}
		<p transition:slide={{duration: 300, axis: 'y'}}>
			{@render children()}
		</p>
	{/if}
</div>

<style lang="scss">
	.accordion {
		border: solid 1px var(--outline-variant);
		border-radius: var(--corner-medium);
		font: var(--body-large);
		max-width: 640px;
		overflow: hidden;
		width: 100%;
	}

	.title {
    align-items: center;
		cursor: pointer;
		display: flex;
		font: var(--title-medium);
		justify-content: space-between;
		padding: 4px 4px 4px 16px;
		width: 100%;
	}

	p {
    padding: 0 16px 16px;
	}
</style>
