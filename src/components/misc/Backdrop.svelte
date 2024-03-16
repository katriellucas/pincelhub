<script lang="ts">
	import { closeBackdrop } from '$lib/actions/closeBackdrop';
	import { fade } from 'svelte/transition';

	let { onClose } = $props<Backdrop>();
</script>

<div
	class="backdrop"
	use:closeBackdrop={onClose}
	transition:fade|global={{ delay: 100, duration: 100 }}
/>

<style lang="scss">
	.backdrop {
		background: rgba(0, 0, 0, 0.5);
		height: 100%;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1;
	}
</style>
