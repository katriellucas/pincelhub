<script lang="ts">
	let { children } = $props<ServiceCard>();
</script>

<div class="simple-card">
	{@render children()}
</div>

<style lang="scss">
	.simple-card {
		border: solid 1px var(--outline-variant);
		border-radius: var(--corner-medium);
		display: flex;
		flex-direction: column;
		font: var(--body-large);
		justify-content: space-between;
		max-width: var(--width);
		padding: 24px;
		width: var(100%);
	}

	.title {
		display: block;
		font: var(--title-large);
	}

	.description {
		color: var(--on-surface-variant);
	}

	footer {
		padding: 0 8px;
	}
</style>
