<script lang="ts">
	import Icon from '@iconify/svelte';
	import ProductCard from '$components/cards/ProductCard.svelte';

	import SimpleCard from '$components/cards/SimpleCard.svelte';
	import Accordion from '$components/misc/Accordion.svelte';
	import Divider from '$components/Divider.svelte';
	import { FAB } from '$components/buttons';
	import ReviewCard from '$components/cards/ReviewCard.svelte';
	import AutoSlider from '$components/misc/AutoSlider.svelte';

	const starterKit = [
		'Ipsum Dolor',
		'Sit Amet',
		'Consectetur',
		'Adipiscing',
		'Elit Sed',
		'Do Eiusmod',
		'Tempor Incididunt'
	];

	const premiumKit = [
		'Ipsum Dolor',
		'Sit Amet',
		'Consectetur',
		'Adipiscing',
		'Elit Sed',
		'Do Eiusmod',
		'Tempor Incididunt'
	];

	export let data;
</script>

<section class="section hero-section">
	<h1 class="hero-title">Lorem ipsum</h1>
	<p class="hero-description">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua.
	</p>

	<div>
		<FAB visual="primary">Primary action</FAB>
		<FAB visual="surface">Secondary action</FAB>
	</div>
</section>

<h2 class="section-title">Descrição</h2>
<section class="section description-section">
	<SimpleCard --width="640px">
		Lorem ipsum dolor sit amet. Et iusto nihil At eligendi amet est illum molestias aut laboriosam
		officia qui impedit maiores ad laborum repellendus et doloribus internos. Et iure placeat sit
		rerum mollitia aut officia fugiat cum reprehenderit aperiam hic facere consectetur ea quaerat
		fugiat 33 voluptatem alias. Qui magni enim ea omnis doloribus sed minus beatae qui porro
		molestiae qui omnis odio hic maiores ducimus est aliquam beatae? At amet aliquam eos dolore
		culpa ex nisi odit.
	</SimpleCard>
</section>

<Divider />

<h2 id="products-section" class="section-title">O que vem</h2>
<section class="product-section">
	<ProductCard
		image="/product-placeholder.webp"
		title="Kit Starter"
		content={starterKit}
		href="https://"
	/>
	<ProductCard
		image="/product-placeholder.webp"
		title="Kit Premium"
		content={premiumKit}
		href="https://"
	/>
</section>

<Divider />

<h2 class="section-title">Depoimentos</h2>
<section class="reviews-section">
	<AutoSlider>
		{#await data.quotes then x}
			{#each x.quotes as {author, quote}, i}
				<ReviewCard image="https://source.boringavatars.com/beam/40/{i}" name={author}>
					{quote}
				</ReviewCard>
			{/each}
		{/await}
	</AutoSlider>
	<AutoSlider inverse>
		{#await data.quotes then x}
			{#each x.quotes as {author, quote}, i}
				<ReviewCard image="https://source.boringavatars.com/beam/40/{i}" name={author}>
					{quote}
				</ReviewCard>
			{/each}
		{/await}
	</AutoSlider>
</section>

<Divider />

<section class="section buy-section">
	<Icon class="graphic" icon="fluent-emoji:megaphone" width="200" />
	<div>
		<h3 class="buy-section__title">Adquira já o seu!</h3>
		<FAB visual="primary">Kit Starter</FAB>
		<FAB visual="tertiary">Kit Premium</FAB>
	</div>
</section>

<Divider />

<h2 id="faq-section" class="section-title">Perguntas Frequentes</h2>
<section class="section faq-section">
	<Accordion title="title">
		<p>
			Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
			international pavilions, award-winning fireworks and seasonal special events.
		</p>
	</Accordion>
	<Accordion title="title">
		<p>
			Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
			international pavilions, award-winning fireworks and seasonal special events.
		</p>
	</Accordion>
	<Accordion title="title">
		<p>
			Epcot is a theme park at Walt Disney World Resort featuring exciting attractions,
			international pavilions, award-winning fireworks and seasonal special events.
		</p>
	</Accordion>
</section>

<style lang="scss">
	.section {
		padding: 0 24px;

		@media (min-width: 600px) {
			padding: 0 32px;
		}

		@media (min-width: 905px) {
			padding: 0 48px;
		}

		@media (min-width: 1240px) {
			padding: 0 64px;
		}

		@media (min-width: 1440px) {
			padding: 0 80px;
		}
	}

	.section-title {
		font: var(--headline-large);
		padding: 64px 0 48px;
		text-align: center;
	}

	.hero-section {
		background: var(--surface);
		display: flex;
		flex-direction: column;
		height: 100vh;
		justify-content: center;
	}

	.hero-title {
		font: var(--display-large);
		max-width: 600px;
	}

	.hero-description {
		font: var(--body-large);
		max-width: 600px;
	}

	.product-section {
		display: grid;
		grid-template-columns: repeat(auto-fit, 320px);
		gap: 64px;
		justify-content: center;
		margin-bottom: 64px;
	}

	.reviews-section {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding-bottom: 64px;
		position: relative;

		&::after {
			content: '';
			background: linear-gradient(
				to right,
				var(--surface-container) 0%,
				transparent 10%,
				transparent 90%,
				var(--surface-container-low) 100%
			);
			position: absolute;
			height: 100%;
			top: 0;
			width: 100%;
		}
	}


	.buy-section {
		background: var(--surface-container-high);
		display: flex;
		gap: 64px;
		padding: 64px 0;
		justify-content: center;

		&__title {
			font: var(--display-medium);
			margin-bottom: 32px;
		}
	}

	.description-section {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding-bottom: 64px;
	}

	.faq-section {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding-bottom: 64px;
	}

	:global(.graphic) {
		filter: drop-shadow(1px 1px 64px #f9c23c);
	}

	@keyframes slideFromLeft {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0%);
		}
	}
</style>
