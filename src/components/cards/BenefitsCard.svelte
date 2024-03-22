<script lang="ts">
	import Icon from '@iconify/svelte';
	import List from '$components/lists/List.svelte';
	import ListItem from '$components/lists/ListItem.svelte';

	let { content, image } = $props<PlanCard>();
</script>

<div class="benefits-card">
	<img src={image} width="300px"/>
	<div class="content">
		<List tag="ul" --gap="12px">
			{#each content as item}
				<ListItem tag="li">
					<Icon icon="mdi:checkbox-marked-circle-outline" color="var(--tertiary)" />
					<p class="item">{item}</p>
				</ListItem>
			{/each}
		</List>
	</div>
</div>

<style lang="scss">
	.benefits-card {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 32px;
		max-width: 672px;
		width: max-content;

		@media (min-width: 600px) {
			flex-direction: row;
			width: 100%;
		}
	}
	.content {
		border: solid 1px var(--outline-variant);
		border-radius: var(--corner-medium);
		padding: 16px;
		width: 100%;
	}

	.title {
		color: var(--primary);
		font: var(--title-large);
		margin: 8px 0 16px;
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
