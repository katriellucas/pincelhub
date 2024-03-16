<script lang="ts">
	let { children, title } = $props();
</script>

<details>
	<summary>{title}</summary>
	<p>{@render children()}</p>
</details>

<style lang="scss">
	details {
		border: solid 1px var(--outline-variant);
		border-radius: var(--corner-medium);
		max-width: 640px;
		width: 100%;
	}

	summary {
		padding: 16px;
	}

	p {
		padding: 0 16px 16px;
	}
</style>
