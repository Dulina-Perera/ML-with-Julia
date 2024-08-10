<script lang="ts">
	import * as config from '$lib/config';
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="gap-8 grid">
		{#each data.posts as post}
			<li
				class="border-b-2 dark:border-gray-800 last:border-b-0 last:pb-0 max-w-prose pb-8"
			>
				<a href={post.slug} class="capitalize text-fluid-1"
					>{post.title}</a
				>
				<p class="">{post.published_at}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
