import Image from "next/image";
import comparisonPanelBackdropImage from "../../../public/comparison-panel-backdrop.png";
import ComparisonPanelJourney from "./journey/comparison-panel-journey";

const ComparisonPanel = ({ className }: { className: string }) => {
  return (
    <section
      className={`${className} relative grid overflow-hidden`}
      id="about"
    >
      <div className="md:border-black md:border-2 shadow-lg bg-[#EFE8DB] text-[#171717] py-16 px-5 md:px-24 z-10 relative font-business leading-normal">
        <h2 className="text-3xl uppercase mb-8 ml-6 font-business font-bold">
          What sets us <span className="underline">apart</span>
        </h2>
        <ul className="text-2xl space-y-8 list-disc list-inside">
          <li className="flex space-x-4 items-start">
            <svg
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-2 mt-2 w-full"
            >
              <path
                d="M1.17863 5.41723e-07C1.4874 6.25524e-05 1.78351 0.115854 2.00181 0.321905L6.6591 4.71651C6.87738 4.92253 7 5.20193 7 5.49325C7 5.78457 6.87738 6.06397 6.6591 6.27L2.00181 10.6646C1.8944 10.7695 1.76592 10.8532 1.62387 10.9108C1.48182 10.9684 1.32904 10.9987 1.17444 11C1.01984 11.0012 0.866525 10.9734 0.723434 10.9182C0.580342 10.8629 0.450344 10.7814 0.341022 10.6782C0.2317 10.5751 0.145246 10.4524 0.0867029 10.3174C0.0281597 10.1824 -0.00130023 10.0377 4.3035e-05 9.8918C0.0013863 9.74592 0.0335056 9.60176 0.0945265 9.46772C0.155547 9.33368 0.24425 9.21245 0.355454 9.1111L4.18957 5.49325L0.355455 1.8754C0.192671 1.72175 0.0818206 1.52601 0.0369154 1.31292C-0.00798977 1.09984 0.0150668 0.878971 0.103171 0.678248C0.191275 0.477525 0.340472 0.305956 0.531899 0.185232C0.723325 0.064507 0.948386 4.72555e-05 1.17863 5.41723e-07Z"
                fill="#171717"
              />
            </svg>
            <div className="text-base">
              <span className="text-[#855736] block font-bold uppercase">
                Engineering Excellence
              </span>
              With nearly 20 years of senior-level professional experience, our
              software engineering team lead specializes in delivering web
              applications that adhere to industry standards and best practices.
            </div>
          </li>
          <li className="flex space-x-4 items-start">
            <svg
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-2 mt-2 w-full"
            >
              <path
                d="M1.17863 5.41723e-07C1.4874 6.25524e-05 1.78351 0.115854 2.00181 0.321905L6.6591 4.71651C6.87738 4.92253 7 5.20193 7 5.49325C7 5.78457 6.87738 6.06397 6.6591 6.27L2.00181 10.6646C1.8944 10.7695 1.76592 10.8532 1.62387 10.9108C1.48182 10.9684 1.32904 10.9987 1.17444 11C1.01984 11.0012 0.866525 10.9734 0.723434 10.9182C0.580342 10.8629 0.450344 10.7814 0.341022 10.6782C0.2317 10.5751 0.145246 10.4524 0.0867029 10.3174C0.0281597 10.1824 -0.00130023 10.0377 4.3035e-05 9.8918C0.0013863 9.74592 0.0335056 9.60176 0.0945265 9.46772C0.155547 9.33368 0.24425 9.21245 0.355454 9.1111L4.18957 5.49325L0.355455 1.8754C0.192671 1.72175 0.0818206 1.52601 0.0369154 1.31292C-0.00798977 1.09984 0.0150668 0.878971 0.103171 0.678248C0.191275 0.477525 0.340472 0.305956 0.531899 0.185232C0.723325 0.064507 0.948386 4.72555e-05 1.17863 5.41723e-07Z"
                fill="#171717"
              />
            </svg>
            <div className="text-base">
              <span className="text-[#855736] block font-bold uppercase">
                Organized, Dependable, and Transparent
              </span>
              We implement program management standards and processes and guide
              our clients through a seamless delivery.
            </div>
          </li>
          <li className="flex space-x-4 items-start">
            <svg
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-2 mt-2 w-full"
            >
              <path
                d="M1.17863 5.41723e-07C1.4874 6.25524e-05 1.78351 0.115854 2.00181 0.321905L6.6591 4.71651C6.87738 4.92253 7 5.20193 7 5.49325C7 5.78457 6.87738 6.06397 6.6591 6.27L2.00181 10.6646C1.8944 10.7695 1.76592 10.8532 1.62387 10.9108C1.48182 10.9684 1.32904 10.9987 1.17444 11C1.01984 11.0012 0.866525 10.9734 0.723434 10.9182C0.580342 10.8629 0.450344 10.7814 0.341022 10.6782C0.2317 10.5751 0.145246 10.4524 0.0867029 10.3174C0.0281597 10.1824 -0.00130023 10.0377 4.3035e-05 9.8918C0.0013863 9.74592 0.0335056 9.60176 0.0945265 9.46772C0.155547 9.33368 0.24425 9.21245 0.355454 9.1111L4.18957 5.49325L0.355455 1.8754C0.192671 1.72175 0.0818206 1.52601 0.0369154 1.31292C-0.00798977 1.09984 0.0150668 0.878971 0.103171 0.678248C0.191275 0.477525 0.340472 0.305956 0.531899 0.185232C0.723325 0.064507 0.948386 4.72555e-05 1.17863 5.41723e-07Z"
                fill="#171717"
              />
            </svg>
            <div className="text-base">
              <span className="text-[#855736] block font-bold uppercase">
                Personalized Approach
              </span>
              We strive to understand your business needs and tailor solutions
              to your unique business goals, either by developing custom
              solutions or configuring out-of-box options.
            </div>
          </li>
          <li className="flex space-x-4 items-start">
            <svg
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-2 mt-2 w-full"
            >
              <path
                d="M1.17863 5.41723e-07C1.4874 6.25524e-05 1.78351 0.115854 2.00181 0.321905L6.6591 4.71651C6.87738 4.92253 7 5.20193 7 5.49325C7 5.78457 6.87738 6.06397 6.6591 6.27L2.00181 10.6646C1.8944 10.7695 1.76592 10.8532 1.62387 10.9108C1.48182 10.9684 1.32904 10.9987 1.17444 11C1.01984 11.0012 0.866525 10.9734 0.723434 10.9182C0.580342 10.8629 0.450344 10.7814 0.341022 10.6782C0.2317 10.5751 0.145246 10.4524 0.0867029 10.3174C0.0281597 10.1824 -0.00130023 10.0377 4.3035e-05 9.8918C0.0013863 9.74592 0.0335056 9.60176 0.0945265 9.46772C0.155547 9.33368 0.24425 9.21245 0.355454 9.1111L4.18957 5.49325L0.355455 1.8754C0.192671 1.72175 0.0818206 1.52601 0.0369154 1.31292C-0.00798977 1.09984 0.0150668 0.878971 0.103171 0.678248C0.191275 0.477525 0.340472 0.305956 0.531899 0.185232C0.723325 0.064507 0.948386 4.72555e-05 1.17863 5.41723e-07Z"
                fill="#171717"
              />
            </svg>
            <div className="text-base">
              <span className="text-[#855736] block font-bold uppercase">
                Full Scope End-to-End Solutions
              </span>
              From planning and implementation, to deployment and ongoing
              maintenance, we&apos;ve got you covered through every step of the
              software development lifecycle.
            </div>
          </li>
          <li className="flex space-x-4 items-start">
            <svg
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-2 mt-2 w-full"
            >
              <path
                d="M1.17863 5.41723e-07C1.4874 6.25524e-05 1.78351 0.115854 2.00181 0.321905L6.6591 4.71651C6.87738 4.92253 7 5.20193 7 5.49325C7 5.78457 6.87738 6.06397 6.6591 6.27L2.00181 10.6646C1.8944 10.7695 1.76592 10.8532 1.62387 10.9108C1.48182 10.9684 1.32904 10.9987 1.17444 11C1.01984 11.0012 0.866525 10.9734 0.723434 10.9182C0.580342 10.8629 0.450344 10.7814 0.341022 10.6782C0.2317 10.5751 0.145246 10.4524 0.0867029 10.3174C0.0281597 10.1824 -0.00130023 10.0377 4.3035e-05 9.8918C0.0013863 9.74592 0.0335056 9.60176 0.0945265 9.46772C0.155547 9.33368 0.24425 9.21245 0.355454 9.1111L4.18957 5.49325L0.355455 1.8754C0.192671 1.72175 0.0818206 1.52601 0.0369154 1.31292C-0.00798977 1.09984 0.0150668 0.878971 0.103171 0.678248C0.191275 0.477525 0.340472 0.305956 0.531899 0.185232C0.723325 0.064507 0.948386 4.72555e-05 1.17863 5.41723e-07Z"
                fill="#171717"
              />
            </svg>
            <div className="text-base">
              <span className="text-[#855736] block font-bold uppercase">No Unnecessary Costs</span>
              We are a small team by choice; we don’t have to cover executive
              salaries, corporate entertaining per diems, or an office space
              with a view. Instead, we pass those savings on to you.
            </div>
          </li>
        </ul>
      </div>

      <div className="hidden md:block absolute -top-60 -left-36 z-0">
        <ComparisonPanelJourney />
      </div>

      <div className="hidden md:block absolute top-3 left-6 right-1 bottom-1 grid-paper-pattern"></div>
    </section>
  );
};

export default ComparisonPanel;
