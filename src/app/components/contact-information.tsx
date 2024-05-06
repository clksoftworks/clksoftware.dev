"use client";

import { useCopyToClipboard } from "usehooks-ts";
import Logo from "./logo";

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
      <p className="text-2xl mb-4">GET IN TOUCH</p>
      <div className="flex justify-center text-2xl">
        <button className="flex items-center" onClick={handleCopy}>
          <svg className="w-6 h-6 mr-2 text-[#C38558]" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span>{emailAddress}</span>
        </button>

      </div>      
      <div className="flex items-center justify-center text-2xl mb-8">
        <svg className="w-6 h-6 mr-2 text-[#C38558]" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <a href="tel:3166695582">316 669 5582</a>
      </div>

      <Logo />
    </div>
  );
};

export default ContactInformation;
