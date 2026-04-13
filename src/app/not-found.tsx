import { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="max-w-5xl w-full min-h-screen flex-col font-sans bg-[#384136] relative z-10 mx-auto xl:border-4 xl:border-black flex items-center justify-center px-8">
      <div className="text-center">
        <p className="text-8xl font-display text-[#C38558] leading-none mb-4">
          404
        </p>

        <div className="w-12 h-0.5 bg-[#C38558] mx-auto mb-8" />

        <h1 className="text-2xl uppercase mb-4 leading-tight">
          Page Not Found
        </h1>

        <p className="font-business text-base leading-relaxed max-w-sm mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <a
          href="/"
          className="inline-block border-black border-2 text-[#171717] px-6 py-2.5 font-sans uppercase bg-[#C38558] hover:bg-[#DFA479] transition-colors duration-200"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
