import HeroJourney from "./journey/hero-journey";

const Hero = ({ className }: { className: string }) => {
  return (
    <section
      className={`${className} relative px-5 md:px-0`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 md:gap-16">
        {/* Copy column */}
        <div className="md:col-span-7 order-2 md:order-1 md:pl-8 md:mt-0">
          {/* Copper accent rule — visible on mobile where journey SVG is hidden */}
          <div className="block md:hidden w-12 h-0.5 bg-[#C38558] mb-8" />

          <h1 className="uppercase text-4xl mb-6 leading-tight md:text-5xl lg:text-6xl">
            WEB SOFTWARE, BUILT RIGHT, WITHOUT THE OVERHEAD
          </h1>

          <div className="text-base font-business leading-relaxed mb-6">
            <p>
              We partner with business owners to build, fix, and scale custom
              web applications, ecommerce platforms, and APIs — nearly two
              decades of senior-level experience, delivered without the bloat
              of a large agency.
            </p>
          </div>

          {/* Copper accent rule — grounds the bottom of the copy on mobile */}
          <div className="block md:hidden w-8 h-0.5 bg-[#C38558]/50 mt-8" />
        </div>

        {/* Journey SVG column — desktop only */}
        <div className="md:col-span-5 relative order-1 md:order-2 hidden md:flex overflow-hidden">
          <HeroJourney />
        </div>
      </div>
    </section>
  );
};

export default Hero;
