import InViewClass from "../in-view-class";
import CallToActionJourney from "./journey/call-to-action-journey";

const CallToAction = ({ className }: { className: string | undefined }) => {
  return (
    <section
      className={`${className} relative bg-[#292E27] border-2 border-[#171717] text-center`}
    >
      <div className="grid md:grid-cols-12 gap-4 md:gap-16 items-center">
        <div className="hidden row-span-full col-span-12 col-start-1 col-end-12 bg-[#384136] md:flex">
          <CallToActionJourney />
        </div>
        <div className="px-6 row-span-full col-span-12 col-start-1 col-end-12 md:col-span-7 md:px-0 py-16 md:bg-[#384136]">
          <p className="text-2xl md:text-xl font-bold mb-4 font-business leading-normal">
            Gain the CONFIDENCE to forge ahead in the digital wilderness.
          </p>
          <hr className="my-6 border-[#171717] border mx-4" />
          <p className="mb-10 font-business leading-normal">
            CLK Software will help you design, launch, and maintain your web
            systems, including websites, web applications, and APIs.
          </p>
          <a
            href="#contact"
            className="group border-black border-2 text-[#171717] px-5 py-2 font-sans uppercase bg-[#C38558] block text-center mx-4"
          >
            <InViewClass classNameWhenInView="animate-jump">
              <span className="group-hover:animate-wiggle inline-block">
                Get in touch now!
              </span>
            </InViewClass>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
