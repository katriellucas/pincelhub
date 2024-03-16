<script lang="ts">
	let { children, image, name } = $props<ServiceCard>();
</script>

<div class="review-card">
	<header>
		<img src={image} />
		{name}
	</header>
	{@render children()}
</div>

<style lang="scss">
	.review-card {
		border: solid 1px var(--outline-variant);
		border-radius: var(--corner-medium);
		display: flex;
		flex-direction: column;
		font: var(--body-large);
		min-width: 320px;
		padding: 16px;

	}

	header {
		align-items: center;
		display: flex;
		gap: 12px;
		margin-bottom: 12px;
	}

	.title {
		display: block;
		font: var(--title-large);
	}
</style>
