export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

// TODO (ALPHA-78): Replace placeholder entries with real client testimonials
// once outreach is complete and approvals are obtained.
const testimonials: Testimonial[] = [
  {
    quote:
      "Chris stepped into a codebase that had been mismanaged for years and had it stable within weeks. He communicated every step clearly and handed it back in better shape than anyone expected.",
    author: "Placeholder — awaiting client approval",
    role: "CEO",
    company: "Client Company A",
  },
  {
    quote:
      "We needed a full rebuild under a hard deadline and CLK Software delivered. The new platform is faster, easier to maintain, and our customers noticed the difference immediately.",
    author: "Placeholder — awaiting client approval",
    role: "VP of Operations",
    company: "Client Company B",
  },
  {
    quote:
      "What impressed me most was that Chris didn't just build what we asked for — he asked the right questions to make sure we were building the right thing. That perspective saved us months of rework.",
    author: "Placeholder — awaiting client approval",
    role: "Founder",
    company: "Client Company C",
  },
];

export function getAllTestimonials(): Testimonial[] {
  return testimonials;
}
