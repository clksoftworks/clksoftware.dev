import ServiceListJourney from "./journey/service-list-journey";
import Image from "next/image";
import serviceListImage from "../../../public/service-list.png";

export default function ServiceList() {
  return (
    <section className="relative grid grid-cols-12 items-center mb-32">
      <div className="col-span-8 pl-40">
        <h2 className="text-4xl uppercase mb-8">
          Full <span className="underline">SDLC</span> Services
        </h2>
        <ul className="space-y-4 text-2xl">
          <li>
            We design our partner's entire applications; from infrastructure to
            code. Ensuring business requirements are met and risks are
            mitigated.
          </li>
          <li>
            Have us audit your existing code, or build a new application from
            scratch.
          </li>
          <li>
            We continue to maintain your partner's applications so they run
            smoothly for years to come.
          </li>
          <li>Don't have tech leadership? We offer that, too!</li>
        </ul>
      </div>
      <div className="col-span-4 flex justify-end">
        <ServiceListJourney />
      </div>
    </section>
  );
}
