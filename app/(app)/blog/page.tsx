import { getPayload } from "payload";
import configPromise from "@payload-config";
import { BlogList, PayloadPost } from "@/components/blog/BlogList";

export const metadata = {
  title: "Blog | Nicaise's Portfolio",
  description: "Read the latest articles on web development, tech, and more.",
};

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "posts",
    depth: 2,
    limit: 100,
    where: {
      status: {
        equals: "published",
      },
    },
    sort: "-publishedAt",
  });

  return <BlogList initialPosts={result.docs as unknown as PayloadPost[]} />;
}
