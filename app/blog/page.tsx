import { BlogList } from "@/components/blog/BlogList";

export const metadata = {
  title: "Blog | Nicaise's Portfolio",
  description: "Read the latest articles on web development, tech, and more.",
};

export default function BlogPage() {
  return <BlogList />;
}
