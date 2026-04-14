const faqs = [
  {
    question: "How does pricing work?",
    answer:
      "We work on a project basis or retainer, depending on what fits your situation. Project engagements start with a scoped discovery phase so you get a fixed quote before any significant work begins — no surprise invoices. Retainers are available for ongoing development, support, or advisory work. Either way, you'll know what you're paying and why before we start.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope, but a focused MVP or rescue engagement usually runs 4–12 weeks. We prioritize fast, iterative delivery over drawn-out timelines. After an initial conversation, we'll give you an honest estimate with a breakdown of what drives the timeline — and flag any decisions that could compress or expand it.",
  },
  {
    question: "What does the kickoff process look like?",
    answer:
      "We start with a discovery call to understand your goals, constraints, and what success looks like. From there, we produce a technical roadmap — architecture, milestones, and a clear scope of work — before writing a line of code. You sign off on the plan, then we build. No ambiguity, no scope creep by surprise.",
  },
  {
    question: "My existing application is struggling. Should I rescue or rebuild?",
    answer:
      "This is one of the most important questions to get right — and the answer is usually 'rescue' unless the codebase is truly beyond saving. A rebuild sounds appealing but carries enormous risk: you're trading known problems for unknown ones. We dig into the actual code before recommending anything. Read our article on this topic for a deeper look at how to evaluate the decision.",
    link: {
      href: "/blog/when-to-rescue-vs-rebuild-your-web-application",
      label: "When to Rescue vs. Rebuild →",
    },
  },
  {
    question: "Do you have strong opinions about technology?",
    answer:
      "Yes — but not dogmatic ones. We default to proven, boring technology that your team can understand and maintain after we're gone. We favor TypeScript, modern React patterns, and infrastructure you don't have to babysit. We'll tell you if we think a technology choice is a mistake, but the goal is always to match the tool to the problem, not the other way around.",
  },
  {
    question: "What happens when the project is done?",
    answer:
      "A clean handoff is a first-class deliverable, not an afterthought. You'll receive documentation, a walkthrough of the architecture, and enough context that your team can own and extend the work confidently. We won't disappear when the code ships — we're available for questions and follow-on work as needed.",
    link: {
      href: "/blog/what-a-good-technical-handoff-looks-like",
      label: "What a good handoff looks like →",
    },
  },
];

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const FAQ = ({ className }: { className?: string }) => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className={`${className ?? ""} px-5 md:px-8 bg-[#2c3129]`}
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-3xl uppercase mb-12">
          COMMON QUESTIONS
        </h2>

        <dl className="space-y-4">
          {faqs.map(({ question, answer, link }) => (
            <details
              key={question}
              className="group border border-[#171717] bg-[#384136] open:bg-[#2c3129] transition-colors"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 md:p-6 font-business font-semibold text-sm md:text-base text-[rgb(239,232,219)] select-none list-none [&::-webkit-details-marker]:hidden">
                <dt>{question}</dt>
                {/* Chevron — rotates when open */}
                <svg
                  className="w-4 h-4 shrink-0 text-[#C38558] transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                  fill="none"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </summary>
              <dd className="px-5 pb-5 md:px-6 md:pb-6 font-business text-sm leading-relaxed text-[rgb(239,232,219)]/75">
                <p>{answer}</p>
                {link && (
                  <a
                    href={link.href}
                    className="inline-block mt-3 font-business text-xs uppercase tracking-widest text-[#C38558] hover:text-[#EFE8DB] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )}
              </dd>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
