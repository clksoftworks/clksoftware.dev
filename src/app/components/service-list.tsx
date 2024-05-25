import ServiceListJourney from "./journey/service-list-journey";
import Image from "next/image";
import serviceListImage from "../../../public/service-list.png";

const ServiceList = ({ className }: { className: string | undefined }) => {
  return (
    <section
      id="services"
      className={`${className} relative grid grid-cols-12 items-center`}
    >
      <div className="row-span-full grid-start-1 col-span-12 md:ml-40 px-8">
        <h2 className="text-4xl uppercase mb-8">
          FULL-SERVICE <span className="underline">SDLC</span> <span className="text-[#DFA479]">&</span> BEYOND
        </h2>
        <ul className="space-y-4 text-2xl">
          <li>
            We <span className="underline">design</span> our partners&apos;
            entire applications, from infrastructure to code, ensuring they meet
            business requirements and mitigate risk.
          </li>
          <li>
            We <span className="underline">build</span> modern and performant
            applications, following industry best practices, with usability and
            maintainability top of mind.
          </li>
          <li>
            We help clients diagnose and resolve issues with their existing
            systems, to improve and <span className="underline">maintain</span>{" "}
            the health and integrity of their applications and data.
          </li>
          <li>
            We identify strategic web solutions for our clients, aimed at
            optimizing their business processes, elevating customer experiences,
            and broadening outreach.
          </li>
        </ul>
      </div>
      <div className="col-span-4 justify-end md:flex hidden">
        <ServiceListJourney />
      </div>
    </section>
  );
};

export default ServiceList;
