import Image from "next/image";
import comparisonPanelBackdropImage from "../../../public/comparison-panel-backdrop.png";
import ComparisonPanelJourney from "./journey/comparison-panel-journey";

const ComparisonPanel = ({ className }: { className: string }) => {
  return (
    <section
      className={`${className} relative grid pb-4 overflow-hidden`}
      id="about"
    >
      <div className="border-black border-2 shadow-lg bg-[#EFE8DB] text-black py-8 px-4 md:px-24 z-10 relative mx-4">
        <h2 className="text-4xl uppercase mb-8">
          What sets us <span className="underline">apart</span>
        </h2>
        <ul className="text-2xl space-y-2 list-disc list-inside">
          <li>
            <span className="underline">Engineering Excellence</span>: With nearly 20 years of senior-level professional experience, our software engineering team lead specializes in delivering web applications that adhere to industry standards and best practices.
          </li>
          <li>
            <span className="underline">Organized, Dependable, and Transparent</span>: We implement program management standards and processes and guide our clients through a seamless delivery.
          </li>
          <li>
            <span className="underline">Personalized Approach</span>: We strive to understand your business needs and tailor solutions to your unique business goals, either by developing custom solutions or configuring out-of-box options.
          </li>
          <li><span className="underline">Full Scope End-to-End Solutions</span>: From planning and implementation, to deployment and ongoing maintenance, we&apos;ve got you covered through every step of the software development lifecycle.</li>
          <li><span className="underline">No Unnecessary Costs</span>: We are a small team by choice; we don’t have to cover executive salaries, corporate entertaining per diems, or an office space with a view. Instead, we pass those savings on to you.</li>
        </ul>
      </div>

      <div className="hidden md:block absolute -top-60 -left-36 z-0">
        <ComparisonPanelJourney />
      </div>

      <div className="absolute top-3 left-6 right-1 bottom-1 grid-paper-pattern"></div>

    </section>
  );
};

export default ComparisonPanel;
