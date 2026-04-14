import { getAllTestimonials } from "./testimonials-data";

const QuoteIcon = () => (
  <svg
    className="w-8 h-8 text-[#C38558]/40 mb-4"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
  </svg>
);

const trustIndicators = [
  { value: "18+", label: "Years of experience" },
  { value: "50+", label: "Projects delivered" },
  { value: "15+", label: "Technologies mastered" },
];

const Testimonials = ({ className }: { className?: string }) => {
  const testimonials = getAllTestimonials();

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className={`${className ?? ""} py-16 px-5 md:px-8 bg-[#2c3129]`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Trust indicators */}
        <div className="grid grid-cols-3 gap-4 mb-16 border border-[#171717] p-6 md:p-8">
          {trustIndicators.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-3xl md:text-4xl text-[#DFA479]">
                {value}
              </p>
              <p className="font-business text-xs md:text-sm uppercase tracking-widest text-[rgb(239,232,219)]/60 mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2
          id="testimonials-heading"
          className="text-3xl uppercase mb-12"
        >
          WHAT CLIENTS SAY
        </h2>

        {/* Testimonial cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="border border-[#171717] bg-[#384136] p-6 flex flex-col"
            >
              <QuoteIcon />
              <blockquote className="font-business text-sm leading-relaxed text-[rgb(239,232,219)]/80 flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer>
                <p className="font-business text-sm font-semibold text-[rgb(239,232,219)]">
                  {t.author}
                </p>
                <p className="font-business text-xs text-[#C38558]/80 mt-0.5">
                  {t.role}, {t.company}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
