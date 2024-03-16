<script lang="ts">
	let { tag, children } = $props<List>();
</script>

<svelte:element this={tag} class="list">
	{@render children()}
</svelte:element>

<style lang="scss">
	.list {
		align-self: flex-start; /* Align the second grid to the top */
		display: grid;
		gap: var(--gap, normal);
		grid-auto-rows: var(--grid-auto-rows, auto);
		grid-template-columns: var(--grid-template-columns, none);
	}
</style>
