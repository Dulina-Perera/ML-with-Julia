<script lang="ts">
	import { formatPublishedAt } from "$lib/utils/dates";
	import type { MarkdownPost } from "../../types";

	export let metadata: MarkdownPost["metadata"];


</script>

<header class="p-4">
	<div class="mb-6 sm:w-3/5 w-full">
		<div class="aspect-h-9 aspect-w-16 overflow-hidden rounded-lg">
			{#if metadata.youtubeId}
				<iframe
					title={metadata.title}
					src={`https://www.youtube.com/embed/${metadata.youtubeId}?origin=http://example.com`}
					allow="fullscreen"
				/>
			{:else}
				<img src={metadata.imgUrl} alt={metadata.title} class="object-cover" />
			{/if}
		</div>
	</div>
	<div>
		<h1 class="font-bold mb-4 text-4xl">{metadata.title}</h1>
		<div
			class="border-t dark:border-gray-700 inline-block py-2"
		>
			<span>Published: </span>
			<time class="font-light" datetime={metadata.publishedAt}>
				{formatPublishedAt(metadata.publishedAt)}
			</time>
		</div>
	</div>
</header>
