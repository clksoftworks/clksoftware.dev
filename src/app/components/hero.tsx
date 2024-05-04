import Image from "next/image";
import heroImage from "../../../public/hero.png";
import HeroJourney from "./journey/hero-journey";

export default function Hero() {
  return (
    <section className="relative px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 sm:gap-16 md:gap-16">
        <div className="md:col-span-7 md:justify-end order-2 -mt-16">
          <h1 className="uppercase text-4xl bg-[#384136]">
            Forge ahead in the digital wilderness
          </h1>
          <p className="text-2xl">We are a full-service software engineering agency with decades of professional experience .</p>
        </div>
        <div className="md:col-span-5 flex justify-center md:justify-start order-1">
          <HeroJourney />
        </div>
      </div>
    </section>
  );
}
