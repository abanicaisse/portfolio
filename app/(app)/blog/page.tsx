import type { Metadata } from "next";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on frontend engineering, performance and leading small teams.",
};

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "posts",
    depth: 1,
    limit: 100,
    where: { status: { equals: "published" } },
    sort: "-publishedAt",
  });

  return <BlogList posts={result.docs} />;
}
