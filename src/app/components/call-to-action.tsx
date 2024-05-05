import CallToActionJourney from "./journey/call-to-action-journey";

const CallToAction = ({ className }: { className: string | undefined }) => {
  return (
    <section className={`${className} relative`}>
      <div className="grid md:grid-cols-12 gap-4 md:gap-16 items-center">
        <div className="flex row-span-full col-span-12 col-start-1 col-end-12 bg-[#384136]">
          <CallToActionJourney />
        </div>
        <div className="px-8 row-span-full col-span-12 col-start-1 col-end-12 md:col-span-7 md:px-0 py-4 bg-[#384136]">
          <p className="text-3xl md:text-xl mb-4">
            Gain the <strong className="uppercase">confidence</strong> to scale!
            With a team that has <em className="opacity-80">done it before</em>.
          </p>
          <p className="text-lg mb-4">
            CLK Software has everything to help you design, launch, and maintain
            your web systems including websitse, web applications, and APIs.
          </p>
          <button className="border-black border-2 text-white px-4 py-2 text-xl font-display bg-black bg-opacity-30 block w-full">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
