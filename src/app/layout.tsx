import type { Metadata } from "next";
import localFont from "next/font/local";
import { Cabin } from "next/font/google";
import Image from "next/image";
import backgroundPicture from "../../public/background.png";
import "./globals.css";

const fontBusiness = Cabin({
  subsets: ["latin"],
  variable: "--font-business",
});

const fontSans = localFont({
  src: "../../public/df9e1f4f05c1afa88b0cb5d2bc8c73ea.woff2",
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = localFont({
  src: "../../public/a8dc217fc9ee0a8d020d2c061f10a2e1.woff2",
  variable: "--font-display",
  display: "swap",
});

const fontSignature = localFont({
  src: "../../public/2f3bd5b9d245ca50231c17abda9489a6.woff2",
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CLK Software — Custom Web Software Development",
    template: "%s | CLK Software",
  },
  description:
    "CLK Software builds, fixes, and scales custom web applications, ecommerce platforms, and APIs. Nearly two decades of senior-level experience without the overhead of a large agency.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} ${fontSignature.variable} ${fontBusiness.variable}`}
      >
        {children}

        <Image
          src={backgroundPicture}
          alt=""
          fill
          className="z-[1] object-cover"
          aria-hidden="true"
        />
      </body>
    </html>
  );
}
