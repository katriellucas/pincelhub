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

	// let list = [
	// 	{ headline: m.public__home(), href: '/' },
	// 	{ headline: m.public__services(), href: '#services' },
	// 	{ headline: m.public__customers(), href: '#customers' },
	// 	{ headline: m.public__price(), href: '/plans' }
	// ];
</script>

<TopAppBar sticky={w.scrollY ? 'sticky' : 'top'}>
	<section>
		<Logo>PincelHub</Logo>
	</section>
	<section>
		<CommonButton visual="text">Início</CommonButton>
		<CommonButton visual="text">Produtos</CommonButton>
		<CommonButton visual="text">Perguntas</CommonButton>
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
