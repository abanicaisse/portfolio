// app/(app)/blog/page.tsx
import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise });

  const posts = await payload.find({
    collection: "posts",
    where: { status: { equals: "published" } },
    sort: "-publishedAt",
  });

  return (
    <ul>
      {posts.docs.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
