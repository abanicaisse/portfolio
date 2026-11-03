import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import type { Post } from "@/payload-types";
import { Accent, Section, SectionIntro } from "@/components/shared/Section";

const dateFormat = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });

async function getLatestPosts(): Promise<Post[]> {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      depth: 1,
      limit: 3,
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
    });
    return result.docs;
  } catch (error) {
    // The home page should still render if the CMS is unreachable.
    console.error("Failed to load posts for the home page", error);
    return [];
  }
}

function categoryName(post: Post) {
  return typeof post.category === "object" ? post.category.name : "Note";
}

function imageOf(post: Post) {
  if (typeof post.featuredImage !== "object" || !post.featuredImage.url) return null;
  return { url: post.featuredImage.url, alt: post.featuredImage.alt ?? "" };
}

export async function WritingSection() {
  const posts = await getLatestPosts();

  return (
    <Section id="writing" index="05" eyebrow="Writing" note="From the blog">
      <SectionIntro
        title={
          <>
            Notes from <Accent>the work</Accent>.
          </>
        }
        aside={
          <Link href="/blog" className="hud-label flex items-center gap-1.5 text-ink-muted hover:text-ink">
            All posts
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        }
      />

      {posts.length === 0 ? (
        <p className="border-t border-line px-6 py-10 text-ink-muted md:px-10">
          New posts are on the way.{" "}
          <Link href="/blog" className="text-ink underline underline-offset-4">
            Visit the blog
          </Link>
          .
        </p>
      ) : (
        <div data-reveal-group className="grid gap-px border-t border-line bg-line md:grid-cols-3">
          {posts.map((post, i) => {
            const image = imageOf(post);
            const date = post.publishedAt ? dateFormat.format(new Date(post.publishedAt)) : null;
            return (
              <article key={post.id} data-reveal className="group relative flex flex-col bg-surface">
                <div className="flex items-center justify-between gap-4 border-b border-line px-6 py-2.5">
                  <p className="hud-label text-ink-muted">{categoryName(post)}</p>
                  <p className="hud-label text-ink-faint">{String(i + 1).padStart(2, "0")}</p>
                </div>
                <div className="relative aspect-video w-full overflow-hidden bg-surface-sunken">
                  {image && (
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      unoptimized
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <h3 className="font-display text-xl font-medium leading-snug tracking-[-0.02em] text-ink-strong">
                    <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-2 leading-relaxed text-ink-muted">{post.excerpt}</p>
                  {date && <p className="hud-label mt-auto pt-5 text-ink-faint">{date}</p>}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </Section>
  );
}
