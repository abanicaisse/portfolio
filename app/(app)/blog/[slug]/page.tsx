import { BlogDetail } from "@/components/blog/BlogDetail";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  return <BlogDetail slug={slug} />;
}
