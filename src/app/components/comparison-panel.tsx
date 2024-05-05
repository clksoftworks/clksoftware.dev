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
            Personalized approach: We tailor our services to fit your unique
            needs and vision.
          </li>
          <li>
            Transparent communication: No tech jargon, just clear
            straightforward dialogue.
          </li>
          <li>
            End-to-End solutions: from initial audit to ongoing maintenance,
            we&apos;re with you every step of the way.
          </li>
          <li>From initial audit to ongoing maintenance</li>
        </ul>
      </div>

      <div className="hidden md:block absolute -top-60 -left-36 z-0">
        <ComparisonPanelJourney />
      </div>

      <Image
        src={comparisonPanelBackdropImage}
        fill
        alt="Comparison Panel"
        className="absolute !top-4 !left-6 !right-0 !-bottom-6 object-cover !w-auto"
      />
    </section>
  );
};

export default ComparisonPanel;
