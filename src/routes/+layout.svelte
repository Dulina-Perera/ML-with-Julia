<script lang="ts">
	import '../app.css';
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
	import MainHeader from '$lib/components/MainHeader.svelte';
</script>

<ThemeInitializer>
	<MainHeader />
	<main class="max-w-5xl mx-auto pt-24">
		<slot />
	</main>
</ThemeInitializer>
