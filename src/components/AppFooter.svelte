<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import Link from '$components/Link.svelte';
	import List from '$components/lists/List.svelte';
	import ListItem from '$components/lists/ListItem.svelte';
	import Logo from '$components/misc/Logo.svelte';
	import Icon from '@iconify/svelte';

	let socialLinks = [
		{ text: 'Twitter', href: 'https://twitter.com/example', icon: 'mdi:twitter' },
		{ text: 'Facebook', href: 'https://facebook.com/example', icon: 'mdi:facebook' },
		{ text: 'Instagram', href: 'https://instagram.com/example', icon: 'mdi:instagram' },
		{ text: 'LinkedIn', href: 'https://linkedin.com/in/example', icon: 'mdi:linkedin' }
	];

	let ProductLinks = [
		{ text: 'Produto 1', href: 'https://example.com' },
		{ text: 'Produto 2', href: 'https://example.com' }
	];

	let companyLinks = [
		{ text: 'Termos', href: 'https://example.com' },
		{ text: 'Privacidade', href: 'https://example.com' }
	];
</script>

<footer>
	<section class="about">
		<div class="about-logo">
			<Logo>Pincel Hub</Logo>
			<!-- !!! change info on release -->
			<address>
				<p>Telefone: (86) 99999-9999</p>
				<p>Email: <Link href="mailto:contact@pincelhub.com">contact@pincelhub.com</Link></p>
				<p>CNPJ: 12.345.678/0001-00</p>
			</address>
		</div>
		<List tag="ul" --gap="16px">
			<ListItem tag="li">Empresa</ListItem>
			{#each companyLinks as { href, text }}
				<ListItem tag="li">
					<Link {href}>{text}</Link>
				</ListItem>
			{/each}
		</List>
		<List tag="ul" --gap="16px">
			<ListItem tag="li">Produtos</ListItem>
			{#each ProductLinks as { href, text }}
				<ListItem tag="li">
					<Link {href}>{text}</Link>
				</ListItem>
			{/each}
		</List>
		<List tag="ul" --gap="16px">
			<ListItem tag="li">Social</ListItem>
			{#each socialLinks as { href, text, icon }}
				<ListItem tag="li">
					<Link {href}>
						<Icon {icon} width="16" />
						{text}
					</Link>
				</ListItem>
			{/each}
		</List>
	</section>
	<Divider />
	<section class="copyright">
		<small>Copyright © 2024, PincelHub</small>
	</section>
</footer>

<style lang="scss">
	footer {
		background: var(--surface);
	}

	.about {
		align-items: start;
		color: var(--on-surface);
		display: grid;
		font: var(--label-large);
		gap: 24px;
		grid-template-columns: repeat(3, 1fr);
		padding: 48px 16px 24px;

		@media (min-width: 600px) {
			gap: 48px;
			grid: 1fr / 1fr auto auto auto;
			padding: 48px 32px 24px;
		}

		@media (min-width: 905px) {
			gap: 64px;
			padding: 48px 48px 24px;
		}

		@media (min-width: 1240px) {
			padding: 48px 64px 24px;
		}

		@media (min-width: 1440px) {
			padding: 48px 80px 24px;
		}
	}

	.about-logo {
		align-self: start;
		grid-column: 1 / -1;
		margin-bottom: 16px;

		@media (min-width: 600px) {
			grid-column: 1 / 1;
		}
	}

	address {
		display: flex;
		flex-direction: column;
		gap: 2px;
		margin-top: 16px;
	}

	.copyright {
		font: var(--body-small);
		padding: 24px 0;
		text-align: center;
	}
</style>
