type ProjectLink = {
  href: string;
  label: string;
  external?: boolean;
};

type Metric = {
  label: string;
  value: string;
};

type Project = {
  title: string;
  description: string;
  outcomes: string[];
  tags: string[];
  link?: ProjectLink;
  metrics?: Metric[];
  clientQuote?: {
    text: string;
    attribution: string;
  };
};

// TODO (ALPHA-83): Replace placeholder projects with real client work once
// content is gathered and client approval for public display is confirmed.
const projects: Project[] = [
  {
    title: "clksoftware.dev",
    description:
      "The very site you're viewing. A marketing and contact platform for CLK Software LLC, built on Next.js 14 with the App Router and deployed globally on Cloudflare Pages.",
    outcomes: [
      "Custom SVG path-drawing animations tied to scroll via IntersectionObserver",
      "Edge-runtime API routes with Cloudflare D1 (SQLite) and Auth0 authentication",
      "Contact form with server-side validation and Resend email delivery",
      "Fully responsive layout with Tailwind CSS and custom typefaces",
    ],
    tags: ["Next.js", "TypeScript", "Cloudflare Pages", "Tailwind CSS", "Auth0", "Resend"],
    link: {
      href: "https://github.com/clksoftworks/clksoftware.dev",
      label: "View source on GitHub",
      external: true,
    },
  },
  {
    // TODO (ALPHA-83): Replace with real project
    title: "Placeholder Project — E-commerce Platform Rescue",
    description:
      "A struggling e-commerce platform with performance bottlenecks and mounting technical debt was stabilized, re-architected, and handed back to the client team with full documentation.",
    outcomes: [
      "Identified and resolved database query bottlenecks causing checkout failures",
      "Reduced page load time from 8s to under 2s through caching and code optimization",
      "Refactored core order processing module — eliminated recurring data integrity bug",
      "Delivered comprehensive handoff documentation and onboarded client dev team",
    ],
    tags: ["Node.js", "PostgreSQL", "Redis", "TypeScript"],
    metrics: [
      { label: "Page load improvement", value: "75%" },
      { label: "Delivery", value: "6 weeks" },
    ],
    clientQuote: {
      text: "Placeholder — awaiting client testimonial",
      attribution: "CTO, Client Company",
    },
  },
  {
    // TODO (ALPHA-83): Replace with real project
    title: "Placeholder Project — Custom SaaS Application",
    description:
      "Greenfield SaaS application for a small business in the professional services sector. Built from discovery through deployment with full project documentation and a clean technical handoff.",
    outcomes: [
      "Delivered MVP in 10 weeks from kickoff to production launch",
      "Multi-tenant architecture with role-based access control",
      "Stripe billing integration with usage-based pricing",
      "CI/CD pipeline, automated test suite, and runbook delivered alongside the app",
    ],
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "PostgreSQL"],
    metrics: [
      { label: "MVP delivery", value: "10 weeks" },
      { label: "Uptime (first 6 months)", value: "99.9%" },
    ],
  },
];

const ExternalLinkIcon = () => (
  <svg
    className="inline-block ml-1.5 w-3.5 h-3.5 mb-0.5 text-[#DFA479]"
    aria-hidden="true"
    fill="none"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronBullet = () => (
  <svg
    viewBox="0 0 7 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-1.5 shrink-0 mt-1.5 text-[#C38558]"
    aria-hidden="true"
  >
    <path
      d="M1.17863 5.41723e-07C1.4874 6.25524e-05 1.78351 0.115854 2.00181 0.321905L6.6591 4.71651C6.87738 4.92253 7 5.20193 7 5.49325C7 5.78457 6.87738 6.06397 6.6591 6.27L2.00181 10.6646C1.8944 10.7695 1.76592 10.8532 1.62387 10.9108C1.48182 10.9684 1.32904 10.9987 1.17444 11C1.01984 11.0012 0.866525 10.9734 0.723434 10.9182C0.580342 10.8629 0.450344 10.7814 0.341022 10.6782C0.2317 10.5751 0.145246 10.4524 0.0867029 10.3174C0.0281597 10.1824 -0.00130023 10.0377 4.3035e-05 9.8918C0.0013863 9.74592 0.0335056 9.60176 0.0945265 9.46772C0.155547 9.33368 0.24425 9.21245 0.355454 9.1111L4.18957 5.49325L0.355455 1.8754C0.192671 1.72175 0.0818206 1.52601 0.0369154 1.31292C-0.00798977 1.09984 0.0150668 0.878971 0.103171 0.678248C0.191275 0.477525 0.340472 0.305956 0.531899 0.185232C0.723325 0.064507 0.948386 4.72555e-05 1.17863 5.41723e-07Z"
      fill="currentColor"
    />
  </svg>
);

const PortfolioSection = ({ className }: { className?: string }) => {
  return (
    <section
      id="portfolio"
      className={`${className ?? ""} px-5 md:px-8 bg-[#384136]`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl uppercase mb-12">OUR WORK</h2>

        <ul className="space-y-10">
          {projects.map((project) => (
            <li
              key={project.title}
              className="border border-[#171717] bg-[#2c3129] p-6 md:p-8"
            >
              {/* Title + link */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <h3 className="font-display text-xl text-[#EFE8DB]">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link.href}
                    target={project.link.external ? "_blank" : undefined}
                    rel={project.link.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center font-business text-xs tracking-widest text-[#DFA479] uppercase hover:text-[#EFE8DB] transition-colors duration-200 shrink-0"
                  >
                    {project.link.label}
                    {project.link.external && <ExternalLinkIcon />}
                  </a>
                )}
              </div>

              {/* Metrics strip */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="flex flex-wrap gap-4 mb-5">
                  {project.metrics.map(({ label, value }) => (
                    <div key={label} className="flex items-baseline gap-1.5">
                      <span className="font-display text-xl text-[#DFA479]">{value}</span>
                      <span className="font-business text-xs uppercase tracking-widest text-[rgb(239,232,219)]/50">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="font-business text-sm leading-relaxed text-[#EFE8DB]/80 mb-5">
                {project.description}
              </p>

              {/* Outcomes */}
              <ul className="space-y-2 mb-5">
                {project.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 font-business text-sm leading-relaxed"
                  >
                    <ChevronBullet />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-business text-xs tracking-widest uppercase px-2.5 py-1 border border-[#DFA479]/40 text-[#DFA479]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Client quote */}
              {project.clientQuote && (
                <blockquote className="border-l-2 border-[#C38558]/40 pl-4 font-business text-sm italic text-[rgb(239,232,219)]/60">
                  &ldquo;{project.clientQuote.text}&rdquo;
                  <footer className="mt-1 text-xs not-italic text-[#C38558]/60">
                    — {project.clientQuote.attribution}
                  </footer>
                </blockquote>
              )}
            </li>
          ))}
        </ul>

        {/* Secondary CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block font-business text-sm uppercase tracking-widest text-[#DFA479] hover:text-[#EFE8DB] transition-colors duration-200"
          >
            Let&apos;s talk about your project &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
