import CallToActionJourney from "./journey/call-to-action-journey";

export default function callToAction() {
  return (
    <section className="relative mt-8">
      <div className="grid grid-cols-12 md:grid-cols-12 gap-4 md:gap-16 items-center">
        <div className="col-span-5 md:col-span-5 flex">
          <CallToActionJourney />
        </div>
        <div className="col-span-7 md:col-span-7 pr-4">
          <p className="text-2xl md:text-xl mb-4">
            Gain the <strong className="uppercase">confidence</strong> to scale! With a team that has <em className="opacity-80">done it before</em>.
          </p>
          <p className="text-lg mb-4">
            CLK Software has everything to help you design, launch, and maintain your web systems including websitse, web applications, and APIs.
          </p>
          <button className="border-black border-2 text-white px-4 py-2 text-xl font-display bg-black bg-opacity-30 block w-full">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
