import InViewClass from "../in-view-class";
import CallToActionJourney from "./journey/call-to-action-journey";

const CallToAction = ({ className }: { className: string | undefined }) => {
  return (
    <section
      className={`${className} relative bg-[#292E27] md:bg-transparent border-2 border-[#171717] md:border-none md:px-8`}
    >
      <div className="grid md:grid-cols-12 gap-4 md:gap-16 items-center max-w-md md:max-w-full mx-auto md:mx-8">
        <div className="hidden row-span-full col-span-12 col-start-1 col-end-12 md:flex md:col-span-5">
          <CallToActionJourney />
        </div>
        <div className="px-6 row-span-full col-span-12 col-start-1 col-end-12 md:col-span-7 md:px-8 py-16 md:py-8 md:bg-[#292E27] md:mr-4 text-center">
          <p className="text-2xl md:text-xl font-bold mb-4 font-business leading-normal">
            Gain the{" "}
            <span className="font-light text-3xl font-sans">CONFIDENCE</span> to
            forge ahead in the digital wilderness.
          </p>
          <hr className="my-6 border-[#171717] border mx-4" />
          <p className="mb-6 font-business leading-normal text-left">
            CLK Software creates custom solutions end-to-end, and helps our
            clients enhance and maintain existing systems. Discover how your
            business can leverage the web to its complete potential &mdash;
            reach out to us today.
          </p>
          <a
            href="#contact"
            className="group border-black border-2 text-[#171717] px-5 py-2 font-sans uppercase bg-[#C38558] block text-center my-8"
          >
            <InViewClass classNameWhenInView="animate-jump">
              <span className="group-hover:!animate-wiggle inline-block">
                Let&apos;s Talk About Your Project
              </span>
            </InViewClass>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
