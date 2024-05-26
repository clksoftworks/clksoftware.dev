import HeroJourney from "./journey/hero-journey";

const Hero = ({ className }: { className: string }) => {
  return (
    <section className={`${className} relative px-5 max-w-md md:max-w-full mx-auto`}>
      <div className="grid grid-cols-1 md:grid-cols-12 sm:gap-16 md:gap-16">
        <div className="md:col-span-7 md:justify-end order-2 md:-mt-16 mt-12">
          <h1 className="uppercase text-4xl bg-[#384136] mb-6 leading-tight">
            ROBUST SOFTWARE ENGINEERING WITHOUT THE OVERHEAD
          </h1>
          <p className="text-base font-business leading-normal mb-6">
            We are a customer-focused software engineering outfit with decades
            of professional experience; we provide our clients with custom
            systems architecture and software solutions that power their
            businesses on the web.
          </p>
          <a
            href="https://github.com/clksoftworks/clksoftware.dev"
            className="text-base font-business flex-inline items-center space-x-2 rounded-lg p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 inline-block"
              viewBox="0 0 98 96"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 2 24 26"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 inline-block"
              >
                <path
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </a>
        </div>
        <div className="md:col-span-5 justify-center md:justify-start order-1 hidden md:flex">
          <HeroJourney />
        </div>
      </div>
    </section>
  );
};

export default Hero;
