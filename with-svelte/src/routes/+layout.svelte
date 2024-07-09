<script lang="ts">
	import '../app.css';
	import ThemeInitializer from '$lib/components/ThemeInitializer.svelte';
	import MainHeader from '$lib/components/MainHeader.svelte';
</script>

<ThemeInitializer>
	<MainHeader />
	<main>
		<slot />
	</main>
</ThemeInitializer>
