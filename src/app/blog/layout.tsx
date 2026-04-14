import Header from "../components/header";
import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-5xl w-full min-h-screen flex-col font-sans bg-[#384136] relative z-10 mx-auto xl:border-4 xl:border-black">
      <Header className="mb-4" />

      {children}

      <footer className="py-8 text-center">
        <Link
          href="/"
          className="font-business text-sm text-[rgb(239,232,219)]/50 hover:text-[#C38558] transition-colors"
        >
          &copy; {new Date().getFullYear()} CLK Software
        </Link>
      </footer>
    </main>
  );
}
