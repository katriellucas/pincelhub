<script lang="ts">
	import { dragElements } from '$lib/actions/dragElements';

	let { children } = $props<SideScroller>();
</script>

<div class="side-scroller" use:dragElements>
	{@render children()}
</div>

<style lang="scss">
	.side-scroller {
		cursor: pointer;
		display: flex;
		gap: var(--gap, 0);
		overflow-x: hidden;
		user-select: none;
		white-space: nowrap;
		width: 100%;
	}

	.active {
		background: rgba(255, 255, 255, 0.3);
		cursor: grabbing;
	}
</style>
