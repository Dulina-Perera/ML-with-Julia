<script lang="ts">
	import "./prism-night-owl.css";
	import type { PageData } from "./$types";

	export let data: PageData;

	const { metadata, post: Post } = data;
</script>

<article>
	<div class="dark:prose-invert max-w-none prose px-4 py-4">
		<Post />
	</div>
</article>
