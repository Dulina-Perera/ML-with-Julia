import { json, type RequestHandler } from '@sveltejs/kit';
import type { Post, PostMetadata } from '$lib/types';

const getPosts = async (): Promise<Post[]> => {
	const posts: Post[] = [];

	const paths: Record<string, { metadata: PostMetadata }> = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace(/\.md$/, '');

		if (file && typeof file === 'object' && 'metadata' in file) {
			const { metadata } = file;

			if (slug && metadata.is_published) {
				posts.push({
					...metadata,
					slug
				});
			}
		}
	}

	posts.sort((first, second) => {
		return new Date(second.published_at).getTime() - new Date(first.published_at).getTime();
	});

	return posts;
}

export const GET: RequestHandler = async () => {
	const posts = await getPosts();

	return json(posts);
};
