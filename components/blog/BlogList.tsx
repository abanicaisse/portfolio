import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/payload-types";
import { Accent, Section, SectionIntro } from "@/components/shared/Section";
import { postCategory, postDate } from "@/components/blog/post-meta";

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <>
      <Section
        id="writing"
        index="01"
        eyebrow="Writing"
        note={`${posts.length} ${posts.length === 1 ? "post" : "posts"}`}
      >
        <SectionIntro
          as="h1"
          title={
            <>
              Notes &amp; <Accent tone="brand">essays</Accent>.
            </>
          }
          lede="On frontend engineering, performance and leading small teams. Written when I learn something worth keeping."
        />
      </Section>

      <Section id="posts" index="02" eyebrow="Posts" note="Newest first">
        {posts.length === 0 ? (
          <p className="px-6 py-14 text-ink-muted md:px-10">New posts are on the way.</p>
        ) : (
          <ol data-reveal-group className="flex flex-col gap-px bg-line">
            {posts.map((post) => {
              const date = postDate(post);
              const category = postCategory(post);
              return (
                <li key={post.id} data-reveal className="bg-surface">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid gap-4 p-6 transition-colors hover:bg-surface-raised md:grid-cols-[10rem_1fr] md:p-8"
                  >
                    <div className="flex gap-3 md:flex-col md:gap-1.5">
                      {date && (
                        <time dateTime={date} className="hud-label text-ink-faint">
                          {date}
                        </time>
                      )}
                      {category && <p className="hud-label text-brand-ink">{category}</p>}
                    </div>
                    <div>
                      <h2 className="flex items-start gap-2 font-display text-2xl font-medium tracking-[-0.02em] text-ink-strong">
                        <span className="flex-1 transition-colors group-hover:text-brand-ink">{post.title}</span>
                        <ArrowRight
                          aria-hidden="true"
                          className="mt-1.5 h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-brand-ink"
                        />
                      </h2>
                      {post.excerpt && (
                        <p className="mt-2 line-clamp-3 max-w-2xl leading-relaxed text-ink-muted">{post.excerpt}</p>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        )}
      </Section>
    </>
  );
}
