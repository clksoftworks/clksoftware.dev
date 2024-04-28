import Image from "next/image";
import heroImage from "../../../public/hero.png";
import HeroJourney from "./journey/hero-journey";

export default function Hero() {
  return (
    <section className="relative mt-8 px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-16">
        <div className="md:col-span-7 flex items-center justify-center md:justify-end order-2">
          <h1 className="uppercase text-4xl">
            Precision web engineering without the overhead
          </h1>
        </div>
        <div className="md:col-span-5 flex justify-center md:justify-start order-1">
          <HeroJourney />
        </div>
      </div>
    </section>
  );
}
