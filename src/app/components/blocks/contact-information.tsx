"use client";

import Logo from "../logo";
import ContactForm from "./contact-form";

const ContactInformation = ({ className }: { className: string }) => {
  const emailAddress = "info@clksoftware.dev";
  const phoneNumber = "316 665 7496";
  const phoneTel = "+13166657496";

  return (
    <div id="contact" className={`${className} px-8 bg-[#212520]`}>
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <p className="text-3xl mb-12 text-center">GET IN TOUCH</p>

        {/* Two-column layout on md+: form left, contact details right */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Form column */}
          <div className="w-full md:flex-1">
            <ContactForm />
          </div>

          {/* Divider — horizontal on mobile, vertical on desktop */}
          <div className="hidden md:block w-px self-stretch bg-[#171717]" />
          <div className="block md:hidden h-px w-full bg-[#171717]" />

          {/* Contact details column */}
          <div className="w-full md:w-auto md:flex-shrink-0 flex flex-col items-start md:items-center gap-8">
            <Logo />

            <div className="border-l-2 border-[#171717] pl-6 font-business space-y-4">
              <div className="flex text-base">
                <a
                  className="flex items-center"
                  href={`mailto:${emailAddress}`}
                >
                  <svg
                    className="w-5 h-5 mr-2 text-[#C38558] shrink-0"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="tracking-widest">{emailAddress}</span>
                </a>
              </div>

              <div className="flex items-center text-base">
                <svg
                  className="w-5 h-5 mr-2 text-[#C38558] shrink-0"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="none"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href={`tel:${phoneTel}`} className="tracking-widest">
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
