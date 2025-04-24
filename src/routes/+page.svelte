<script>
	//import { X } from '@lucide/svelte';
</script>

<main class="flex h-screen flex-col items-center justify-center">
	<div class="ml-80 h-30 w-30 rounded-full bg-blue-900 blur-2xl"></div>
	<h1 class="text-3xl font-bold">Albin Kempe</h1>
	<div
		class="m-8 flex w-9/10 flex-row items-center justify-center gap-8 rounded-md bg-neutral-900 p-4 lg:w-3/10 lg:gap-16"
	>
		<a
			href="/portfolio"
			class="rounded bg-neutral-900 p-3 text-white outline-2 outline-white hover:bg-blue-500"
			>Portfolio</a
		>
		<a
			href="/about"
			class="rounded bg-neutral-900 p-3 text-white outline-2 outline-white hover:bg-orange-500"
			>About Me</a
		>
	</div>
	<div class="mr-100 h-50 w-50 rounded-full bg-orange-900 blur-2xl"></div>
</main>

<footer class="bg-neutral-800 py-8">
	<div class="mx-auto max-w-screen-xl px-4">
		<div class="flex items-center justify-between">
			<p class="text-sm">© 2025 Albin Kempe. All rights reserved.</p>
			<div class="space-x-4">
				<a href="#" class="hover:text-gray-400">Privacy Policy</a>
				<a href="#" class="hover:text-gray-400">Terms of Service</a>
				<a href="#" class="hover:text-gray-400">Contact</a>
			</div>
		</div>
	</div>
</footer>
