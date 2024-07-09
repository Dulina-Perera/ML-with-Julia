<script lang="ts">
	import { darkmode } from '$lib/stores/darkmode';
	import Moon from './svg/Moon.svelte';
	import Sun from './svg/Sun.svelte';

	const toggleDarkMode = () => {
		if ($darkmode) {
			$darkmode = false;
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			$darkmode = true;
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
	};
</script>

<button class="dark:text-yellow-200 p-2 text-purple-800" on:click={toggleDarkMode}>
	{#if $darkmode}
		<Sun class="fill-current h-8 w-8" />
	{:else}
		<Moon class="fill-current h-8 w-8" />
	{/if}
</button>
