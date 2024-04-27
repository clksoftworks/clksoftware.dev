import Image from "next/image";
import heroImage from "../../../public/hero.png";

export default function Hero() {
  return (
    <section className="relative">
      <Image src={heroImage} alt="Hero" className="w-full" />
    </section>
  );
}