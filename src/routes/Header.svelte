<script lang="ts">
	import logo from '$lib/images/tiny-mustards.jpeg';
	
	let mobileMenuOpen: Boolean = false;
	
	function handleMobileMenuClick() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
</script>

<header>
	<nav class="bg-orange-300">
		<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
			<div class="relative flex h-16 items-center justify-between">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<!-- Mobile menu button-->
					<button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" on:click={handleMobileMenuClick}>
						<span class="sr-only">Open main menu</span>
						<svg class:block={!mobileMenuOpen} class:hidden={mobileMenuOpen} class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
						<svg class:block={mobileMenuOpen} class:hidden={!mobileMenuOpen} class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<div class="flex flex-shrink-0 items-center">
						<a href="/">
							<img class="block h-8 w-auto rounded-full" src={logo} alt="Tiny Mustards Logo">
						</a>
					</div>
					<div class="hidden sm:ml-6 sm:block">
						<div class="flex space-x-4">
							<!-- Current: "bg-gray-700 text-white", Default: "text-gray-600 hover:bg-gray-500 hover:text-white" -->
							<a href="/" class="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Mobile menu, show/hide based on menu state. -->
		{#if mobileMenuOpen}
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pt-2 pb-3">
				<!-- Current: "bg-gray-700 text-white", Default: "text-gray-600 hover:bg-gray-500 hover:text-white" -->
				<a href="/" class="bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
			</div>
		</div>
		{/if}
	</nav>
</header>

<style>
</style>
