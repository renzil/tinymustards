<script>
	import Header from './Header.svelte';
	import "../app.css";
</script>

<div class="app flex flex-col min-h-screen box-border">
	<Header />

	<main class="flex flex-1 flex-col p-4 w-full max-w-5xl mx-auto">
		<slot />
	</main>

	<footer class="flex flex-col justify-center items-center p-3 sm:py-3">
		<p>visit <a class="font-bold" href="https://www.instagram.com/tinymustards/" target="_blank" rel="noreferrer">Tiny Mustards Instagram</a> to learn more.</p>
	</footer>
</div>
