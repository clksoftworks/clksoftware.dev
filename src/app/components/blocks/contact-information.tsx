"use client";

import { useCopyToClipboard } from "usehooks-ts";
import Logo from "../logo";

const ContactInformation = ({ className }: { className: string }) => {
  const [copiedText, copy] = useCopyToClipboard();

  const emailAddress = "info@clksoftware.dev";

  const handleCopy = () => {
    copy(emailAddress).catch((error) => {
      console.error("Failed to copy!", error);
    });
  };

  return (
    <div id="contact" className={`${className} px-8 text-center bg-[#212520]`}>
      <p className="text-3xl mb-12">GET IN TOUCH</p>

      <Logo />

      <div className="flex justify-center mt-12">
        <div className="border-l-2 border-[#171717] pl-6 font-business space-y-4">
          <div className="flex text-base">
            <a className="flex items-center" href="mailto:info@clksoftware.dev">
              <svg
                className="w-5 h-5 mr-2 text-[#C38558]"
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
                ></path>
              </svg>
              <span className="tracking-widest">{emailAddress}</span>
            </a>
          </div>

          <div className="flex items-center text-base">
            <svg
              className="w-5 h-5 mr-2 text-[#C38558]"
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
              ></path>
            </svg>
            <a href="tel:+13166657496 " className="tracking-widest">
              316 665 7496
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
