import Image from "next/image";
import heroImage from "../../../public/hero.png";
import HeroJourney from "./hero-journey";

export default function Hero() {
  return (
    <section className="relative border-l-[3px] border-r-[3px] border-black mt-8">
      <div className="grid grid-cols-10 md:grid-cols-12 gap-16">
        <div className="col-span-10 md:col-span-7 flex items-center justify-center md:justify-end">
          <h1 className="uppercase text-4xl">Robust development expertise <br /> without the overhead</h1>
          </div>
        <div className="col-span-10 md:col-span-5 flex justify-center md:justify-start">
          <HeroJourney />
        </div>
      </div>
    </section>
  );
}
