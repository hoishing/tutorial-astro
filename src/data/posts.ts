const posts = import.meta.glob("../pages/posts/*.md", { eager: true }) as Record<string, Post>;
const allPosts = Object.values(posts);
const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];

export { allPosts, uniqueTags };
