import Image from "next/image";
import comparisonPanelImage from "../../../public/comparison-panel.png";
import ComparisonPanelJourney from "./journey/comparison-panel-journey";

export default function ComparisonPanel() {
  return (
    <section className="relative mx-40" id="about">
      <div className="border-black border-2 shadow-lg bg-[#EFE8DB] text-black py-12 px-24 z-10 relative">
        <h2 className="text-4xl uppercase mb-4">
          What sets us <span className="underline">apart</span>
        </h2>
        <ul className="text-2xl space-y-2 list-disc">
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

      <div className="absolute -top-60 -left-36 z-0">
        <ComparisonPanelJourney />
      </div>
    </section>
  );
}
