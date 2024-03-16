<script lang="ts">
	import SideScroller from './SideScroller.svelte';

	let { images } = $props<Gallery>();
	let index: number = $state(0);
</script>

<div class="gallery">
	<img class="main-image" src={images[index].src} alt={images[index].alt} />
</div>

<SideScroller --gap="0 8px">
	{#each images as { src, alt }, i}
		<button class="thumb" onclick={() => (index = i)}>
			<img draggable="false" class="image" class:selected={index === i} {src} {alt} />
		</button>
	{/each}
</SideScroller>

<style lang="scss">
	.gallery {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		margin-bottom: 16px;
	}

	.main-image {
		border-radius: var(--corner-large);
		height: 100%;
		object-fit: cover;
		width: 100%;
	}

	.thumb {
		height: 80px;
		width: 80px;
		background: var(--primary);
		border-radius: var(--corner-extra-large);
		flex: 0 0 auto;
		transition: opacity 0.5s;
		user-select: none;

		&:hover {
			opacity: 80%;
		}

		@media (min-width: 1440px) {
			height: 112px;
			width: 160px;
		}
	}

	.image {
		border-radius: var(--corner-extra-large);
		height: 100%;
		object-fit: cover;
		opacity: 100%;
		transition: opacity 0.5s;
		width: 100%;
	}

	.selected {
		opacity: 30%;
	}
</style>
