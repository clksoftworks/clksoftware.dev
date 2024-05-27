import InViewClass from "../in-view-class";
import CallToActionJourney from "./journey/call-to-action-journey";

const CallToAction = ({ className }: { className: string | undefined }) => {
  return (
    <section
      className={`${className} relative bg-[#292E27] border-2 border-[#171717]`}
    >
      <div className="grid md:grid-cols-12 gap-4 md:gap-16 items-center max-w-md md:max-w-full mx-auto">
        <div className="hidden row-span-full col-span-12 col-start-1 col-end-12 bg-[#384136] md:flex">
          <CallToActionJourney />
        </div>
        <div className="px-6 row-span-full col-span-12 col-start-1 col-end-12 md:col-span-7 md:px-0 py-16 md:bg-[#384136]">
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
                Get in touch now!
              </span>
            </InViewClass>
          </a>

          <a
            href="https://github.com/clksoftworks/clksoftware.dev"
            target="_blank"
            className="text-base font-business flex-inline items-center space-x-2 rounded-lg p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 inline-block"
              viewBox="0 0 98 96"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="currentColor"
              />
            </svg>
            <span className="font-bold text-sm">
              <span className="leading-none mr-1">
                Audit this site&apos;s code on GitHub
              </span>
              <svg
                data-slot="icon"
                aria-hidden="true"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 2 24 26"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 inline-block"
              >
                <path
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
