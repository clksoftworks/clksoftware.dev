import HeroJourney from "./journey/hero-journey";

const Hero = ({ className }: { className: string }) => {
  return (
    <section className={`${className} relative px-5`}>
      <div className="grid grid-cols-1 md:grid-cols-12 sm:gap-16 md:gap-16">
        <div className="md:col-span-7 md:justify-end order-2 md:-mt-16 mt-12">
          <h1 className="uppercase text-4xl bg-[#384136] mb-6 leading-tight">
            ROBUST SOFTWARE ENGINEERING WITHOUT THE OVERHEAD
          </h1>
          <p className="text-base font-business leading-normal">
            We are a customer-focused software engineering outfit with decades
            of professional experience; we provide our clients with custom
            systems architecture and software solutions that power their
            businesses on the web.
          </p>
        </div>
        <div className="md:col-span-5 justify-center md:justify-start order-1 hidden md:flex">
          <HeroJourney />
        </div>
      </div>
    </section>
  );
};

export default Hero;
