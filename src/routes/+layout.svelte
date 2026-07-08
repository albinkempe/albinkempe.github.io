<script lang="ts">
    import Sidenav from '$lib/components/Sidenav.svelte';
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href="/favicon.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Mono:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
</svelte:head>

<main>
	<Sidenav />
	<div class="content">
		<div class="page-content">
			{@render children()}
		</div>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		background-color: #141212;
        color: #ffffff;
        font-family: 'Red Hat Mono', monospace;
		overflow-x: hidden;
	}

    main {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: row;
	}

    .content {
		width: 90vw;
		height: 100vh;
    }

	.page-content {
		height: fit-content;
		width: 50vw;
		margin: 10rem auto;
	}
</style>