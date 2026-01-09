import { posts } from "../data";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
  const post = posts.find((post: Post) => post.slug == params.slug);

  return { post };
};
