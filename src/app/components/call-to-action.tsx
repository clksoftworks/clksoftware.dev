import CallToActionJourney from "./journey/call-to-action-journey";

const CallToAction = ({ className }: { className: string | undefined }) => {
  return (
    <section
      className={`${className} relative bg-[#292E27] border-2 border-[#171717] mx-2 text-center`}
    >
      <div className="grid md:grid-cols-12 gap-4 md:gap-16 items-center">
        <div className="hidden row-span-full col-span-12 col-start-1 col-end-12 bg-[#384136] md:flex">
          <CallToActionJourney />
        </div>
        <div className="px-6 row-span-full col-span-12 col-start-1 col-end-12 md:col-span-7 md:px-0 py-16 md:bg-[#384136]">
          <p className="text-2xl md:text-xl mb-4">
            Gain the CONFIDENCE to forge ahead in the digital wilderness.
          </p>
          <hr className="my-6 border-[#171717] border mx-4" />
          <p className="text-lg mb-6 font-business">
            CLK Software will help you design, launch, and maintain your web
            systems, including websites, web applications, and APIs.
          </p>
          <a
            href="#contact"
            className="border-black border-2 text-[#171717] px-4 py-2 text-xl font-display bg-[#C38558] block text-center mx-4"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
