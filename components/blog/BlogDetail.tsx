import { createElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { RichText, type JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import type { SerializedBlockNode } from "@payloadcms/richtext-lexical";
import type { Post } from "@/payload-types";
import { Section, SectionIntro } from "@/components/shared/Section";
import { ShareBar } from "@/components/shared/ShareBar";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { postAuthor, postCategory, postDate, postImage } from "@/components/blog/post-meta";

interface CodeBlockFields {
  blockType: "Code";
  language?: string | null;
  code?: string | null;
}

function plainText(nodes: readonly object[]): string {
  return nodes
    .map((node) => {
      if ("text" in node && typeof node.text === "string") return node.text;
      if ("children" in node && Array.isArray(node.children)) return plainText(node.children as object[]);
      return "";
    })
    .join("");
}

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  heading: ({ node, nodesToJSX }) =>
    createElement(node.tag, { id: slugify(plainText(node.children)) }, nodesToJSX({ nodes: node.children })),
  upload: ({ node }) => {
    const media = node.value;
    if (typeof media !== "object" || !("url" in media) || typeof media.url !== "string") return null;
    const alt = "alt" in media && typeof media.alt === "string" ? media.alt : "";
    const width = "width" in media && typeof media.width === "number" ? media.width : 1600;
    const height = "height" in media && typeof media.height === "number" ? media.height : 900;
    return (
      <figure className="my-10 overflow-hidden border border-line bg-surface-sunken">
        <Image
          src={media.url}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          className="h-auto w-full"
        />
      </figure>
    );
  },
  blocks: {
    Code: ({ node }: { node: SerializedBlockNode<CodeBlockFields> }) => (
      <CodeBlock code={node.fields.code ?? ""} language={node.fields.language ?? "typescript"} />
    ),
  },
});

export function BlogDetail({ post }: { post: Post }) {
  const date = postDate(post);
  const category = postCategory(post);
  const author = postAuthor(post);
  const image = postImage(post);

  return (
    <>
      <Section id="post" index="01" eyebrow={category ?? "Writing"} note={date ?? undefined}>
        <SectionIntro as="h1" title={post.title} lede={post.excerpt}>
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            {author && (
              <div className="flex items-center gap-3">
                {author.avatar && (
                  <Image
                    src={author.avatar}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="h-8 w-8 rounded-full bg-line object-cover"
                  />
                )}
                <p className="text-sm font-medium text-ink">{author.name}</p>
              </div>
            )}
            {date && (
              <time dateTime={date} className="hud-label text-ink-faint">
                {date}
              </time>
            )}
          </div>
          <div data-reveal className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
            <Link href="/blog" className="hud-label inline-flex items-center gap-1.5 text-ink-muted hover:text-ink">
              <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Back to writing
            </Link>
            <ShareBar path={`/blog/${post.slug}`} title={post.title} />
          </div>
        </SectionIntro>
      </Section>

      <Section id="article" railLabel="Article">
        {image && (
          <div className="relative aspect-video w-full overflow-hidden border-b border-line bg-surface-sunken">
            <Image src={image.url} alt={image.alt} fill unoptimized priority sizes="1120px" className="object-cover" />
          </div>
        )}
        <article className="article-content mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
          <RichText data={post.content} converters={converters} disableContainer />
        </article>
        <div className="flex flex-col items-start gap-6 border-t border-line px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <Link href="/blog" className="hud-label inline-flex items-center gap-1.5 text-ink-muted hover:text-ink">
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All posts
          </Link>
          <ShareBar path={`/blog/${post.slug}`} title={post.title} />
        </div>
      </Section>
    </>
  );
}
