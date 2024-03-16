<script>
	let { children, inverse } = $props()
</script>


<div class="scroll">
  <div class="m-scroll" class:inverse>
		{@render children()}
		{@render children()}
  </div>
</div>

<style>
	.scroll {
	  overflow: hidden;
	}

	.m-scroll {
	  animation: scrollText 60s infinite linear;
	  gap: 32px;
	  display: flex;
	  width: fit-content;
	  padding: 0 16px;

		&.inverse {
			animation: scrollInverse 60s infinite linear;
		}
	}

	@keyframes scrollText {
	  from { transform: translateX(-50%) }
	  to { transform: translateX(0%) }
	}

	@keyframes scrollInverse {
	  from { transform: translateX(0%) }
	  to { transform: translateX(-50%) }
	}
</style>