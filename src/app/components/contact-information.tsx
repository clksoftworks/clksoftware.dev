"use client";

import { useCopyToClipboard } from "usehooks-ts";

export default function ContactInformation() {
  const [copiedText, copy] = useCopyToClipboard();

  const emailAddress = "info@clksoftware.dev";

  const handleCopy = () => {
    copy(emailAddress).catch((error) => {
      console.error("Failed to copy!", error);
    });
  };

  return (
    <div id="contact" className="px-8 text-center">
      <dl>
        <dt className="text-xl mb-2">Contact us to start your free consultation</dt>
        <dd className="text-xl font-display">
          <button onClick={handleCopy}>{emailAddress}</button>
          {copiedText && (
            <div className="flex justify-center space-x-1 text-sm font-sans text-[#C38558] text-right">
              <svg
                className="w-6 h-6"
                data-slot="icon"
                aria-hidden="true"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span>Email address copied to clipboard</span>
            </div>
          )}

          <div className="text-xl font-display">
          <a href="tel:3166695582">316 669 5582</a>
          </div>
        </dd>
      </dl>
    </div>
  );
}
