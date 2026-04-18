import { notFound } from "next/navigation";
import { BlogDetail } from "@/components/blog/BlogDetail";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "posts",
    depth: 2,
    where: {
      slug: {
        equals: slug,
      },
      status: {
        equals: "published",
      },
    },
    limit: 1,
  });

  const post = result.docs[0];

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
}
