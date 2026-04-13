"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      _honeypot: (form.elements.namedItem("_honeypot") as HTMLInputElement).value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        const json = (await response.json()) as { message?: string };
        setErrorMessage(
          json.message ?? "Something went wrong. Please try again."
        );
        setFormState("error");
      }
    } catch {
      setErrorMessage(
        "Unable to send your message. Please check your connection and try again, or reach us directly using the contact details below."
      );
      setFormState("error");
    }
  };

  const inputBase =
    "w-full bg-[#171717] border border-[#384136] rounded px-4 py-2.5 text-sm font-business text-white placeholder-[#6b7c69] focus:outline-none focus:border-[#C38558] transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="_honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-business tracking-widest text-[#C38558] mb-1.5 uppercase"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputBase}
            disabled={formState === "submitting" || formState === "success"}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-business tracking-widest text-[#C38558] mb-1.5 uppercase"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputBase}
            disabled={formState === "submitting" || formState === "success"}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-business tracking-widest text-[#C38558] mb-1.5 uppercase"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project..."
            className={`${inputBase} resize-none`}
            disabled={formState === "submitting" || formState === "success"}
          />
        </div>

        {formState === "success" && (
          <div
            role="status"
            className="flex items-start gap-2 rounded border border-[#C38558]/40 bg-[#C38558]/10 px-4 py-3 text-sm font-business text-[#DFA479]"
          >
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-[#C38558]"
              aria-hidden="true"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>
              Your message has been sent. We&apos;ll be in touch soon.
            </span>
          </div>
        )}

        {formState === "error" && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-business text-red-300"
          >
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
              aria-hidden="true"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={formState === "submitting" || formState === "success"}
          className="w-full rounded bg-[#C38558] px-6 py-2.5 text-sm font-business tracking-widest text-[#171717] uppercase transition-colors duration-200 hover:bg-[#DFA479] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {formState === "submitting" ? "Sending..." : formState === "success" ? "Sent" : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
