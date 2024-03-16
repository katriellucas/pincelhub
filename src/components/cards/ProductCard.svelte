<script lang="ts">
	import CommonButton from '$components/buttons/CommonButton.svelte';
	import Icon from '@iconify/svelte';
	import List from '$components/lists/List.svelte';
	import ListItem from '$components/lists/ListItem.svelte';
	import Divider from '$components/Divider.svelte';

	let { content, price, description, image, href, title, variant } = $props<PlanCard>();
</script>

<div class="product-card" class:popular={variant === 'popular'}>
	<header>
		<img src={image} />
		<h3 class="title">{title}</h3>
	</header>
	<List tag="ul" --gap="12px">
		{#each content as item}
			<ListItem tag="li">
				<Icon icon="mdi:checkbox-marked-circle-outline" color="var(--tertiary)" />
				<p class="item">{item}</p>
			</ListItem>
		{/each}
	</List>
	<footer>
		<CommonButton wide {href} visual="filled">Adquira já o seu!</CommonButton>
	</footer>
</div>

<style lang="scss">
	.product-card {
		border: solid 1px var(--outline-variant);
		border-radius: var(--corner-medium);
		display: flex;
		flex-direction: column;
		padding: 16px;
		width: 100%;
	}

	.title {
		color: var(--primary);
		font: var(--title-large);
		margin: 8px 0 16px;
		text-align: center;
	}

	.price {
		font: var(--headline-large);
	}

	.item {
		font: var(--body-medium);
		margin-left: 8px;
	}

	footer {
		display: flex;
		margin-top: 16px;
	}
</style>
