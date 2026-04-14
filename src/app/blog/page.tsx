import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "./posts";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical insights, project strategy, and lessons from nearly two decades of building custom web applications.",
  openGraph: {
    title: "Blog | CLK Software",
    description:
      "Technical insights, project strategy, and lessons from nearly two decades of building custom web applications.",
    url: "https://clksoftware.dev/blog",
    siteName: "CLK Software",
  },
};

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <div className="relative z-10 mx-auto max-w-2xl px-5 py-16 md:px-8 md:py-24">
      <header className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl">Blog</h1>
        <p className="mt-4 font-business text-lg text-[rgb(239,232,219)]/70">
          Technical insights, project strategy, and lessons from nearly two
          decades of building custom web applications.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {posts.map((post) => {
          const formattedDate = new Date(post.date).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-lg border border-[rgb(239,232,219)]/10 p-6 transition-colors hover:border-[#C38558]/40 hover:bg-[#C38558]/5"
            >
              <h2 className="font-display text-xl transition-colors group-hover:text-[#C38558] md:text-2xl">
                {post.title}
              </h2>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-business text-sm text-[rgb(239,232,219)]/50">
                <span>{formattedDate}</span>
                <span>{post.readingTime}</span>
              </div>
              <p className="mt-3 font-sans text-[rgb(239,232,219)]/70">
                {post.description}
              </p>
              {post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#C38558]/10 px-2.5 py-0.5 font-business text-xs text-[#C38558]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
