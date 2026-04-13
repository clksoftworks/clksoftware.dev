import ComparisonPanelJourney from "./journey/comparison-panel-journey";

const CHEVRON = (
  <svg
    viewBox="0 0 7 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="max-w-2 mt-2 w-full shrink-0"
    aria-hidden="true"
  >
    <path
      d="M1.17863 5.41723e-07C1.4874 6.25524e-05 1.78351 0.115854 2.00181 0.321905L6.6591 4.71651C6.87738 4.92253 7 5.20193 7 5.49325C7 5.78457 6.87738 6.06397 6.6591 6.27L2.00181 10.6646C1.8944 10.7695 1.76592 10.8532 1.62387 10.9108C1.48182 10.9684 1.32904 10.9987 1.17444 11C1.01984 11.0012 0.866525 10.9734 0.723434 10.9182C0.580342 10.8629 0.450344 10.7814 0.341022 10.6782C0.2317 10.5751 0.145246 10.4524 0.0867029 10.3174C0.0281597 10.1824 -0.00130023 10.0377 4.3035e-05 9.8918C0.0013863 9.74592 0.0335056 9.60176 0.0945265 9.46772C0.155547 9.33368 0.24425 9.21245 0.355454 9.1111L4.18957 5.49325L0.355455 1.8754C0.192671 1.72175 0.0818206 1.52601 0.0369154 1.31292C-0.00798977 1.09984 0.0150668 0.878971 0.103171 0.678248C0.191275 0.477525 0.340472 0.305956 0.531899 0.185232C0.723325 0.064507 0.948386 4.72555e-05 1.17863 5.41723e-07Z"
      fill="#171717"
    />
  </svg>
);

const differentiators = [
  {
    title: "Engineering Excellence",
    body: "Nearly two decades of senior-level experience means your project is built right the first time — clean architecture, solid standards, no technical debt handed back to you.",
  },
  {
    title: "Organized, Dependable, and Transparent",
    body: "You'll always know where your project stands. We follow structured delivery processes and communicate clearly at every stage, so there are no surprises at launch.",
  },
  {
    title: "Personalized Approach",
    body: "We take the time to understand your business before we write a line of code. Solutions are tailored to your goals — not repackaged templates sold as custom work.",
  },
  {
    title: "End-to-End Ownership",
    body: "From the first planning conversation through deployment and ongoing maintenance, we stay with you. One team, full accountability, across the entire lifecycle.",
  },
  {
    title: "No Unnecessary Overhead",
    body: "We're a small, senior team by design. No executive layers, no bloated agency fees — just direct access to the engineers doing the work, at a price that reflects that.",
  },
];

const ComparisonPanel = ({ className }: { className: string }) => {
  return (
    <section
      className={`${className} relative grid grid-cols-12 overflow-hidden`}
      id="about"
    >
      <div className="hidden xl:block md:col-span-4">
        <ComparisonPanelJourney />
      </div>
      <div className="shadow-lg bg-[#EFE8DB] md:border-black md:border-2 text-[#171717] z-10 relative font-business leading-normal row-span-full grid-start-1 col-span-12 md:col-span-8 px-5 max-w-md md:max-w-full mx-auto md:px-8 py-12">
        <h2 className="text-3xl uppercase mb-8 ml-6 font-business font-bold">
          What sets us <span className="underline">apart</span>
        </h2>
        <ul className="space-y-8">
          {differentiators.map(({ title, body }) => (
            <li key={title} className="flex space-x-4 items-start">
              {CHEVRON}
              <div className="text-base">
                <span className="text-[#855736] block font-bold uppercase mb-1">
                  {title}
                </span>
                <p>{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ComparisonPanel;
