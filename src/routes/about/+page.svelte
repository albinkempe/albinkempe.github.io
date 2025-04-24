<script>
	import { MoveLeft } from '@lucide/svelte';
</script>

<main class="flex h-screen flex-col items-center justify-center">
	<h1 class="text-3xl font-bold">About Me</h1>
	<div
		class="m-8 flex w-9/10 flex-row items-center justify-center gap-16 rounded-md bg-neutral-900 p-4 lg:w-3/10 lg:gap-8"
	>
		<a
			href="/"
			class="rounded bg-neutral-900 p-2 text-white outline-2 outline-white hover:bg-orange-500"
			><MoveLeft /></a
		>
	</div>
</main>
