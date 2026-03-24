export type BlogCategory =
  | "All posts"
  | "Launches"
  | "Changelog"
  | "Company"
  | "Engineering"
  | "Events"
  | "Learning"
  | "Stacking"
  | "State of Code"
  | "Launch week";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or rich text string
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: BlogCategory;
  imageUrl: string;
  featured?: boolean;
}

export const CATEGORIES: BlogCategory[] = [
  "All posts",
  "Changelog",
  "Company",
  "Engineering",
  "Events",
  "Launch week",
  "Launches",
  "Learning",
  "Stacking",
  "State of Code",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "introducing-cursor-cloud-agents-in-graphite",
    title: "Introducing Cursor Cloud Agents in Graphite",
    excerpt: "Software development is changing quickly. With agents now capable of writing code...",
    content: `
Software development is changing quickly. With agents now capable of writing code, opening PRs, and even fixing CI failures, developers are spending less time typing and more time reviewing, refining, and shipping agent-generated work. 

Last week Cursor **pushed cloud agents further**—giving each agent its own virtual machine to build, test, and even demo working code independently. These agents can onboard to a codebase and produce merge-ready PRs with video demos of their work.

Yet most of today's developer tooling was built for a world where only humans did the typing. That gap has made it harder to review, refine, and merge AI-generated changes without context-switching or fragmentation across tools. Until now.

Today, we're launching **Cursor Cloud Agents in Graphite**—a deeply integrated experience that lets you create, review, refine, and merge agent-generated PRs without ever leaving your browser.

## Create PRs with agents, right in Graphite

Introducing the Agents tab in Graphite: a dedicated place for you to kick off Cursor Cloud Agents and create PRs. Simply open the **Agents** tab, describe the change you want, and Cursor Cloud Agents will pull context from your repo, generate the code, create a video demo of the finished product, and open a draft PR for you to review the changes. No IDE required, no local setup, simply prompt and ship.

## Chat with agents in the PR page

Now, when you're reviewing a PR in Graphite and you spot a fix, you don't have to context-switch to your IDE or open a separate Cursor tab. Just open the **Agent tab** right in the PR page and tell it what to change. The agent understands your codebase, sees the PR diff, recognizes CI failures, and reads any reviewer comments. Once it's finished editing, the Cursor agent commits its changes directly to the branch.

## Pick the best model for the task

You can pick from any of the top coding models supported by Cursor. Different tasks call for different models, and now you have the flexibility to choose the best one for the job.

## Two workflows, one surface

You can start an agent thread in Cursor and pick it up in Graphite, or vice versa, with full history and context preserved. We see developers using this in two main ways:

- **Start in Cursor, finish in Graphite.** Kick off a cloud agent on [cursor.com](https://cursor.com) or from your IDE. When it finishes working, you open the PR in Graphite, review the diff, check CI, read comments, and use the agent to iterate — all without going back to the IDE.
- **Start and finish in Graphite.** Open the Agents tab, prompt the agent, and ship—without ever opening your IDE.

Either way, the workflow stays intact. There's no handoff gap between generation and review, no context lost between tools, and no extra environment to manage. Agent-generated code moves from prompt to PR to merge in one continuous loop.
    `,
    author: {
      name: "Peter Stakoun",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Peter",
    },
    date: "Mar 2, 2026",
    category: "Launches",
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1200", 
    featured: true,
  },
  {
    slug: "building-the-future-of-software-development-with-cursor",
    title: "Building the future of software development with Cursor",
    excerpt: "Exploring the partnership between Graphite and Cursor to revolutionize developer workflows.",
    content: "Content for building the future of software development...",
    author: {
      name: "Tomasz",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tomasz",
    },
    date: "Dec 19, 2025",
    category: "Company",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "reimagining-the-pr-page",
    title: "Reimagining the PR Page: Designing for speed and focus",
    excerpt: "How we completely redesigned the PR review experience to be faster and more intuitive.",
    content: "Content for reimagining the PR page...",
    author: {
      name: "Design Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Design",
    },
    date: "Nov 24, 2025",
    category: "Launches",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "graphite-changelog-11-20-2025",
    title: "Graphite changelog [11-20-2025]",
    excerpt: "Performance improvements, new dashboard views, and assorted bug fixes.",
    content: "Content for graphite changelog 11-20-2025...",
    author: {
      name: "Engineering",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eng",
    },
    date: "Nov 19, 2025",
    category: "Changelog",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "the-future-of-engineering-is-collaborative",
    title: "The future of engineering is collaborative (and already here)",
    excerpt: "Key takeaways from our latest engineering summit on remote team collaboration.",
    content: "Content for collaborative engineering...",
    author: {
      name: "Sarah",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    date: "Oct 14, 2025",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "meet-graphite-agent",
    title: "Meet Graphite Agent: The next evolution of AI code review",
    excerpt: "Introducing our native AI reviewer that understands your stack and context.",
    content: "Content for meet graphite agent...",
    author: {
      name: "Product Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Product",
    },
    date: "Oct 7, 2025",
    category: "Launches",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
  },
  {
    slug: "introducing-frozen-branches",
    title: "Introducing frozen branches: A safer way to build on your teammates' work",
    excerpt: "Learn how frozen branches prevent cascading merge conflicts in stacked PRs.",
    content: "Content for frozen branches...",
    author: {
      name: "Backend Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Backend",
    },
    date: "Sep 17, 2025",
    category: "Engineering",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
  },
];

export function getFeaturedPost(): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.featured);
}

export function getPostsByCategory(category: BlogCategory | "All posts"): BlogPost[] {

  
  // Actually, Graphite usually keeps the featured post at the top and doesn't repeat it in the grid.
  const nonFeatured = BLOG_POSTS.filter((post) => !post.featured);
  
  if (category === "All posts") {
    return nonFeatured;
  }
  return BLOG_POSTS.filter((post) => post.category === category);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
