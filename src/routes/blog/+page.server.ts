import { posts } from "./data";

export function load() {
  return {
    summaries: posts.map((post: Post) => ({
      slug: post.slug,
      title: post.title,
    })),
  };
}
