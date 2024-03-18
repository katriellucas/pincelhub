<script lang="ts">
	import { window as w, theme } from '$lib/managers';
	// import { outcomps, menus } from '$lib/runtime-comps.svelte.js';
	import Icon from '@iconify/svelte';

	import TopAppBar from '$components/TopAppBar.svelte';
	import { CommonButton } from '$components/buttons';
	import AppFooter from '$components/AppFooter.svelte';
	// import { CommonButton, IconButton } from '$components/buttons';
	// import Dialog from '$components/Dialog.svelte';
	// import Divider from '$components/Divider.svelte';
	// import List from '$components/lists/List.svelte';
	// import ListItem from '$components/lists/ListItem.svelte';
	import Logo from '$components/misc/Logo.svelte';
	import Fab from '$components/buttons/FAB.svelte';
	// import Menu from '$components/menus/Menu.svelte';
	// import MenuItem from '$components/menus/MenuItem.svelte';

	let { children } = $props();

	function toSection(anchor) {
		console.log(document.querySelector(anchor))
		window.scrollTo({
			top: document.querySelector(anchor).offsetTop,
			behavior: 'smooth'
		})
	}
</script>

<TopAppBar >
	<section>
		<Logo>PincelHub</Logo>
	</section>
	<section>
		<CommonButton href="#" visual="text">
		Início
		</CommonButton>
		<CommonButton href="#products-section" visual="text">Produtos</CommonButton>
		<CommonButton href="#faq-section" visual="text">Perguntas</CommonButton>
		<CommonButton visual="text">Contato</CommonButton>
	</section>
</TopAppBar>

<main>
	{@render children()}
</main>

<AppFooter />

<span class="contact-fab">
	<Fab href="" visual="primary">
		<Icon icon="mdi:whatsapp" width="24" />
	</Fab>
</span>

<style>
	.nav-section {
		align-items: center;
		display: flex;
		gap: 4px;
	}

	.contact-fab {
		position: fixed;
		bottom: 16px;
		right: 16px;
	}
</style>
