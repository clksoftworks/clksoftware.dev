import ServiceListJourney from "./journey/service-list-journey";
import Image from "next/image";
import serviceListImage from "../../../public/service-list.png";

export default function ServiceList() {
  return (
    <section className="relative grid grid-cols-12 items-center">
      <div className="row-span-full grid-start-1 col-span-12 md:ml-40 px-8">
        <h2 className="text-4xl uppercase mb-8">
          Full <span className="underline">SDLC</span> Services
        </h2>
        <ul className="space-y-4 text-2xl">
          <li>
            We design our partner&apos;s entire applications; from
            infrastructure to code. Ensuring business requirements are met and
            risks are mitigated.
          </li>
          <li>
            Have us audit your existing code, or build a new application from
            scratch.
          </li>
          <li>
            We continue to maintain your partner&apos;s applications so they run
            smoothly for years to come.
          </li>
          <li>Don&apos;t have tech leadership? We offer that, too!</li>
        </ul>
      </div>
      <div className="col-span-4 justify-end md:flex hidden">
        <ServiceListJourney />
      </div>
    </section>
  );
}
