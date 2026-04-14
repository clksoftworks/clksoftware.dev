import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../posts";
import RescueVsRebuild from "../posts/when-to-rescue-vs-rebuild-your-web-application.mdx";
import TechnicalHandoff from "../posts/what-a-good-technical-handoff-looks-like.mdx";

export const runtime = "edge";

const postComponents: Record<string, ComponentType> = {
  "when-to-rescue-vs-rebuild-your-web-application": RescueVsRebuild,
  "what-a-good-technical-handoff-looks-like": TechnicalHandoff,
};

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://clksoftware.dev/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://clksoftware.dev/blog/${post.slug}`,
      siteName: "CLK Software",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const meta = getPostBySlug(params.slug);
  if (!meta) notFound();

  const Content = postComponents[params.slug];
  if (!Content) notFound();

  const formattedDate = new Date(meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="relative z-10 mx-auto max-w-2xl px-5 py-16 md:px-8 md:py-24">
      <Link
        href="/blog"
        className="mb-8 inline-block font-business text-sm uppercase tracking-wider text-[#C38558] hover:underline"
      >
        &larr; Back to Blog
      </Link>

      <header className="mb-10">
        <h1 className="font-display text-3xl leading-tight md:text-4xl">
          {meta.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-business text-sm text-[rgb(239,232,219)]/60">
          <span>{meta.author}</span>
          <span>{formattedDate}</span>
          <span>{meta.readingTime}</span>
        </div>
        {meta.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#C38558]/15 px-2.5 py-0.5 font-business text-xs text-[#C38558]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:text-[rgb(239,232,219)] prose-p:text-[rgb(239,232,219)]/85 prose-a:text-[#C38558] prose-a:no-underline hover:prose-a:underline prose-strong:text-[rgb(239,232,219)] prose-code:text-[#C38558] prose-pre:bg-[#212520] prose-blockquote:border-[#C38558]/40 prose-li:text-[rgb(239,232,219)]/85">
        <Content />
      </div>
    </article>
  );
}
