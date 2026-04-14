"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
  isLink?: boolean;
};

const navItems: NavItem[] = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog", isLink: true },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const renderItem = (item: NavItem, onClick?: () => void) => {
  const className = "animate-underline-from-center";
  if (item.isLink) {
    return (
      <Link href={item.href} className={className} onClick={onClick}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} className={className} onClick={onClick}>
      {item.label}
    </a>
  );
};

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile: hamburger toggle */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="lg:hidden inline-flex items-center justify-center p-2 text-[rgb(239,232,219)] hover:text-[#C38558] transition-colors"
      >
        {open ? (
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile: collapsible vertical nav */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="lg:hidden w-full font-business font-semibold leading-normal mt-4"
        >
          <ul className="flex flex-col items-center space-y-4 text-base uppercase">
            {navItems.map((item) => (
              <li key={item.href}>{renderItem(item, () => setOpen(false))}</li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop: horizontal nav (unchanged appearance) */}
      <nav
        aria-label="Primary navigation"
        className="hidden lg:flex justify-center font-business font-semibold leading-normal"
      >
        <ul className="flex lg:text-lg lg:space-x-8 lg:capitalize lg:font-light">
          {navItems.map((item) => (
            <li key={item.href}>{renderItem(item)}</li>
          ))}
        </ul>
      </nav>
    </>
  );
}
