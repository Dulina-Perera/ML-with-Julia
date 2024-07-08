<script lang="ts">
	import '../app.css';

	import Logo from '../lib/components/svg/Logo.svelte';
</script>

<header class="border-b fixed inset-x-0 top-0 z-10">
	<nav class="flex h-24 items-center justify-between max-w-5xl mx-auto px-4">
		<a href="/"> <Logo class="h-28 w-28" /> </a>
	</nav>
</header>

<main>
	<slot />
</main>
