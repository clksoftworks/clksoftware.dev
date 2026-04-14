export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
};

const posts: PostMeta[] = [
  {
    slug: "when-to-rescue-vs-rebuild-your-web-application",
    title: "When to Rescue vs. Rebuild Your Web Application",
    description:
      "Not every struggling application needs to be rebuilt from scratch. Here's how to evaluate whether a rescue or a rebuild is the right call for your project.",
    date: "2026-04-13",
    author: "Chris Keefer",
    tags: ["strategy", "web applications", "consulting"],
    readingTime: "6 min read",
  },
  {
    slug: "what-a-good-technical-handoff-looks-like",
    title: "What a Good Technical Handoff Looks Like",
    description:
      "A clean handoff is what separates a professional engagement from a frustrating one. Here's what clients should expect when a contractor finishes the work.",
    date: "2026-04-13",
    author: "Chris Keefer",
    tags: ["process", "consulting", "project management"],
    readingTime: "5 min read",
  },
];

export function getAllPosts(): PostMeta[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}
