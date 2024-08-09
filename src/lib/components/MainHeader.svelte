<script lang="ts">
	import DarkModeButton from './DarkModeButton.svelte';
	import IconLink from './IconLink.svelte';
	import Github from './svg/Github.svelte';
	import Logo from './svg/Logo.svelte';
	import Youtube from './svg/Youtube.svelte';
</script>

<header class="bg-white border-b dark:bg-dark-background dark:border-gray-800 inset-x-0 top-0 z-10">
	<nav class="flex h-24 items-center justify-between max-w-5xl mx-auto px-4">
		<a href="/"> <Logo class="h-28 w-28" /> </a>
		<div class="flex items-center space-x-1">
			<DarkModeButton />
			<IconLink href="https://www.youtube.com/@joseanmartinez/featured" target="_blank">
				<Youtube class="fill-current h-8 w-8" />
			</IconLink>
			<IconLink href="https://www.github.com/josean-dev" target="_blank">
				<Github class="fill-current h-8 w-8" />
			</IconLink>
		</div>
	</nav>
</header>
