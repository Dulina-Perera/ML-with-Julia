export interface PostMetadata {
	title: string;
	description: string;
	categories: string[];
	author: string;
	is_published: boolean;
	published_at: string;
}

export interface Post extends PostMetadata {
	slug: string;
}
