<script lang="ts">
	let { children, href, target, onclick } = $props<Link>();
</script>

<a class="link" {href} {target} {onclick}>
	{@render children()}
</a>

<style lang="scss">
	.link {
		align-items: center;
		color: var(--on-surface-variant);
		display: inline-flex;
		font: var(--body-medium);
		gap: 8px;

		&:hover {
			color: var(--primary);
		}
	}
</style>
