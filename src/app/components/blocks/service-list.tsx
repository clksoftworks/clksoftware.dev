import ServiceListJourney from "./journey/service-list-journey";

const BULLET = (
  <svg
    className="max-w-4 w-full mt-2 shrink-0"
    viewBox="0 0 16 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M-3.302e-07 6.5C-2.42626e-07 8.22391 0.696526 9.87721 1.93635 11.0962C3.17617 12.3152 4.85774 13 6.61111 13C9.84918 13 12.972 10.6205 14.9337 8.74096C16.2311 7.49783 16.2311 5.50217 14.9337 4.25904C12.972 2.37945 9.84918 5.83228e-07 6.61111 7.05018e-07C4.85773 7.70966e-07 3.17617 0.68482 1.93635 1.90381C0.696525 3.12279 -4.17775e-07 4.77609 -3.302e-07 6.5ZM9.75926 6.5C9.75926 7.11218 9.57462 7.71061 9.2287 8.21962C8.88278 8.72863 8.3911 9.12536 7.81585 9.35963C7.24061 9.5939 6.60762 9.65519 5.99694 9.53576C5.38626 9.41633 4.82531 9.12154 4.38503 8.68866C3.94476 8.25579 3.64493 7.70427 3.52345 7.10385C3.40198 6.50343 3.46432 5.88108 3.7026 5.3155C3.94088 4.74992 4.34438 4.26651 4.86209 3.9264C5.3798 3.58629 5.98847 3.40476 6.61111 3.40476C7.44605 3.40476 8.2468 3.73087 8.83719 4.31134C9.42758 4.89181 9.75926 5.67909 9.75926 6.5Z"
      fill="#EFE8DB"
    />
  </svg>
);

const services = [
  {
    keyword: "plan",
    copy: (
      <>
        Get a clear technical roadmap before a single line of code is written.
        We <span className="text-[#DFA479] font-bold">plan</span> your
        application from infrastructure to interface — so you launch with
        confidence and without costly surprises mid-project.
      </>
    ),
  },
  {
    keyword: "build",
    copy: (
      <>
        Receive a fast, reliable, maintainable application your team can own
        long after launch. We{" "}
        <span className="text-[#DFA479] font-bold">build</span> with modern
        standards and your real-world business requirements at the center of
        every decision.
      </>
    ),
  },
  {
    keyword: "rescue",
    copy: (
      <>
        Stop losing time and money to a system that&apos;s holding you back. We
        diagnose and{" "}
        <span className="text-[#DFA479] font-bold">rescue</span> struggling
        applications — fixing performance problems, untangling bad code, and
        stabilizing systems so your business can move forward again.
      </>
    ),
  },
  {
    keyword: "grow",
    copy: (
      <>
        Identify the right digital investments to reach more customers and run
        your operations more efficiently. We help you{" "}
        <span className="text-[#DFA479] font-bold">grow</span> by translating
        your business goals into web strategy that delivers measurable results.
      </>
    ),
  },
];

const ServiceList = ({ className }: { className: string | undefined }) => {
  return (
    <section
      id="services"
      className={`${className} relative grid grid-cols-12 items-center`}
    >
      <div className="row-span-full grid-start-1 col-span-12 md:col-span-8 px-5 max-w-md md:max-w-full mx-auto md:px-8">
        <h2 className="text-3xl uppercase mb-8">
          WHAT WE <span className="text-[#DFA479]">DO</span>{" "}
          <span className="underline">FOR YOU</span>
        </h2>
        <ul className="space-y-10 font-business">
          {services.map(({ keyword, copy }) => (
            <li key={keyword} className="flex space-x-4 items-start">
              {BULLET}
              <div>{copy}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4 justify-end md:flex hidden">
        <ServiceListJourney />
      </div>
    </section>
  );
};

export default ServiceList;
