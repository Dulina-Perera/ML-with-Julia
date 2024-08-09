<script lang="ts">
	import { browser } from "$app/environment";
	import { darkmode } from "$lib/stores/darkmode";

	if (browser) {
		$darkmode = window.prefersDarkMode;
	}
</script>

<svelte:head>
	<script>
		window.prefersDarkMode = false;

		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			window.prefersDarkMode = true;
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<slot />
