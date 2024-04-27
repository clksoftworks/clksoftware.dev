import Image from "next/image";
import comparisonPanelImage from "../../../public/comparison-panel.png";

export default function ComparisonPanel() {
  return (
    <section className="relative" id="about">
      <Image src={comparisonPanelImage} alt="Comparison Panel" className="w-full" />
    </section>
  );
}