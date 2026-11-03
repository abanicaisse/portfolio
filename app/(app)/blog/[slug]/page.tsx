import type { Metadata } from "next";
import { cache } from "react";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { BlogDetail } from "@/components/blog/BlogDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const getPost = cache(async (slug: string) => {
  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "posts",
    depth: 2,
    where: { slug: { equals: slug }, status: { equals: "published" } },
    limit: 1,
  });
  return result.docs[0] ?? null;
});

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPost((await params).slug);
  if (!post) notFound();
  return <BlogDetail post={post} />;
}
