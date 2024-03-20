<script lang="ts">
	import { window as w, theme } from '$lib/managers';

	import Icon from '@iconify/svelte';

	import TopAppBar from '$components/TopAppBar.svelte';
	import { CommonButton, IconButton } from '$components/buttons';
	import AppFooter from '$components/AppFooter.svelte';

	import Logo from '$components/misc/Logo.svelte';
	import Fab from '$components/buttons/FAB.svelte';
	import { Menu, MenuItem } from '$components/menus';
	// import Menu from '$components/menus/Menu.svelte';
	// import MenuItem from '$components/menus/MenuItem.svelte';

	let { children } = $props();

	let navMenu = $state(false)
	let navItems = [
		{ label: 'Início', href: '#' },
    { label: 'Produtos', href: '#products-section' },
    { label: 'Perguntas', href: '#faq-section' },
    { label: 'Contato', href: '' }
	]

</script>

<TopAppBar >
	<section>
		<Logo>PincelHub</Logo>
	</section>
	<section>
		{#if w.innerWidth > 600}
			{#each navItems as { label, href }}
				<CommonButton {href} visual="text">{label}</CommonButton>
			{/each}
		{:else}
			<Menu tag="nav"
				isOpen={navMenu}
				position="bottom-right"
				onClose={() => navMenu = true}
			>
			<IconButton
				icon="mdi:menu"
				visual="standard"
				onclick={() => navMenu = !navMenu}
			/>
			{#snippet content()}
				{#each navItems as { label, href }}
					<MenuItem tag="a" type="material" {href}>{label}</MenuItem>
				{/each}
			{/snippet}
		</Menu>
		{/if}
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

	.hover-menu {
		right: 0;
		display: flex;
		flex-direction: column;
		margin: 0;
		position: absolute;
		top: 100%;
		opacity: 0;
		transform: translateY(-20px);
		transition: 
			transform .2s ease-in-out,
			opacity .1s ease-out;
		overflow: hidden;
		z-index: 1;
	}

	.hover-menu-button {
		position: relative;

		&:hover, &:focus, &:focus-within {
			& + .hover-menu {
				opacity: 1;
				transform: translateY(0px);
				height: auto;
				z-index: 1;
			}
		}
	}
</style>
