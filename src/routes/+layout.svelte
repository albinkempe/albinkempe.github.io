<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Noto+Serif:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="site-main">
	{@render children()}
</main>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		background: #0f1113;
		color: #edeef2;
		font-family: 'DM Sans', sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	.site-main {
		width: calc(100% - 2rem);
		max-width: 70rem;
		margin: 0 auto;
	}

	@media (min-width: 48rem) {
		.site-main {
			width: calc(100% - 4rem);
		}
	}
</style>
