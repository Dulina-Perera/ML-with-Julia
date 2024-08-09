<script lang="ts">
	import '../app.css';
	import MainHeader from '$lib/components/MainHeader.svelte';
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
</script>

<ThemeInitializer>
	<MainHeader />
	<main class="max-w-5xl mx-auto pt-24">
		<slot />
	</main>
</ThemeInitializer>
