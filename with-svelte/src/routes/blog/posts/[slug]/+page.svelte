<script lang="ts">
	import './prism-night-owl.css';
	import type { PageData } from './$types';
	import CopyCodeInjector from '$lib/components/CopyCodeInjector.svelte';

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<article>
	<div class="dark:prose-invert max-w-none prose px-4 py-4">
		<CopyCodeInjector>
			<Post />
		</CopyCodeInjector>
	</div>
</article>
