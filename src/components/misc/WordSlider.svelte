<script lang="ts">
	import { fly } from 'svelte/transition';

	let { text } = $props<WordSlider>();
	let wordSlide = $derived(text.split(',').map((word) => word.trim()));
	let index = $state(0);

	setInterval(() => (index = (index + 1) % wordSlide.length), 4000);
</script>

<div class="word-slider">
	{#key index}
		<span class="word" in:fly={{ y: '-50%', delay: 200 }} out:fly={{ y: '50%' }}>
			{wordSlide[index]}
		</span>
	{/key}
</div>

<style>
	.word-slider {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.word {
		color: var(--primary);
		grid-row: 1;
		grid-column: 1;
	}
</style>
