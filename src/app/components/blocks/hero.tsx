import HeroJourney from "./journey/hero-journey";

const Hero = ({ className }: { className: string }) => {
  return (
    <section
      className={`${className} relative px-5 md:px-0 max-w-md md:max-w-full mx-auto`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 sm:gap-16 md:gap-16">
        <div className="md:col-span-7 md:justify-end order-2 mt-12 md:pl-8">
          <h1 className="uppercase text-4xl bg-[#384136] mb-6 leading-tight md:text-5xl lg:text-6xl">
            ROBUST SOFTWARE ENGINEERING WITHOUT THE OVERHEAD
          </h1>
          <div className="text-base font-business leading-normal mb-6">
            <p className="mb-2">
              A client-focused web software engineering outfit with decades of
              professional experience.
            </p>
            <p>
              We architect and execute web apps, ecommerce platforms, serverless
              functions, apis, bots, websites, and more — all guided by{" "}
              <em>your business vision</em>.
            </p>
          </div>
        </div>
        <div className="md:col-span-5 relative justify-center md:justify-start order-1 md:order-2 hidden md:flex overflow-hidden">
          <HeroJourney />
        </div>
      </div>
    </section>
  );
};

export default Hero;
