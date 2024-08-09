<script lang='ts'>
	import Github from './svg/Github.svelte';
	import IconLink from './IconLink.svelte';
	import Logo from './svg/Logo.svelte';
	import ToggleModeButton from './ToggleModeButton.svelte';
</script>

<header
	class='bg-slate-100 border-b-2 dark:bg-dark-background dark:border-gray-800 inset-x-0 top-0 z-10'
>
	<nav class='flex h-28 items-center justify-between max-w-5xl mx-auto px-4'>
		<a href='/'> <Logo class='fill-current h-20 w-20' /> </a>
		<div class='flex items-center space-x-2'>
			<ToggleModeButton />
			<IconLink href='https://www.github.com/Dulina-Perera' target='_blank'>
				<Github class='fill-current h-8 w-8' />
			</IconLink>
		</div>
	</nav>
</header>
