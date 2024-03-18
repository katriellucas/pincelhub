<script lang="ts">
	let { children, sticky }: TopAppBar = $props();
</script>

<!-- @katriel, find a better way to choose bg color instead of this class sticky/top mess -->
<header class="top-app-bar sticky">
	{@render children()}
</header>

<style>
	.top-app-bar {
		align-items: center;
		display: flex;
		font: var(--title-large);
		justify-content: space-between;
		min-height: 64px;
		padding: 0 16px;
		transition: background 0.2s;
		z-index: 1;
	}

	.top {
		background: var(--surface);
	}

	.sticky {
		background: var(--surface-container);
		position: sticky;
		top: 0;
	}
</style>
