import type { Post } from "@/payload-types";

export function postCategory(post: Post): string | null {
  return typeof post.category === "object" ? post.category.name : null;
}

export function postAuthor(post: Post): { name: string; avatar: string | null } | null {
  if (typeof post.author !== "object") return null;
  const avatar = typeof post.author.avatar === "object" && post.author.avatar?.url ? post.author.avatar.url : null;
  return { name: post.author.name, avatar };
}

export function postImage(post: Post): { url: string; alt: string } | null {
  if (typeof post.featuredImage !== "object" || !post.featuredImage.url) return null;
  return { url: post.featuredImage.url, alt: post.featuredImage.alt ?? "" };
}

/** ISO date (2026-01-30), matching the HUD style of the rest of the site. */
export function postDate(post: Post): string | null {
  return post.publishedAt ? post.publishedAt.slice(0, 10) : null;
}
