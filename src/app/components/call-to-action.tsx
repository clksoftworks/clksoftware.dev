import Image from "next/image";
import callToActionImage from "../../../public/call-to-action.png";

export default function callToAction() {
  return (
    <section className="relative">
      <Image src={callToActionImage} alt="Call To Action" className="w-full" />
    </section>
  );
}