import { Metadata } from "next";
import Footer from "./components/footer";
import Hero from "./components/blocks/hero";
import ServiceList from "./components/blocks/service-list";
import ComparisonPanel from "./components/blocks/comparison-panel";
import CallToAction from "./components/blocks/call-to-action";
import FinishJourney from "./components/blocks/journey/finish-journey";
import Testimonials from "./components/blocks/testimonials";
import TestimonialsJourney from "./components/blocks/journey/testimonials-journey";
import PortfolioSection from "./components/blocks/portfolio-section";
import FAQ from "./components/blocks/faq";
import FaqJourney from "./components/blocks/journey/faq-journey";
import ContactInformation from "./components/blocks/contact-information";
import Header from "./components/header";
import SessionService from "./services/session-service";

const SITE_URL = "https://clksoftware.dev";
const PAGE_TITLE = "CLK Software — Custom Web Software Development";
const PAGE_DESCRIPTION =
  "CLK Software builds, fixes, and scales custom web applications, ecommerce platforms, and APIs. Nearly two decades of senior-level engineering experience, delivered without the overhead of a large agency.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: "CLK Software",
    images: [
      {
        url: "/hero.png",
        width: 1403,
        height: 394,
        alt: "CLK Software — Custom Web Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/hero.png"],
  },
};

export default async function Home() {
  const session = await SessionService.getSession();

  return (
    <main className="max-w-5xl w-full min-h-screen flex-col font-sans bg-[#384136] relative z-10 mx-auto xl:border-4 xl:border-black">
      <Header className="mb-4" />

      <Hero className="mb-16" />

      <CallToAction className="mb-16" />

      <ServiceList className="mb-16" />

      <Testimonials />

      <div className="relative w-full hidden md:block md:aspect-video">
        <TestimonialsJourney />
      </div>

      <ComparisonPanel className="mb-0 md:mb-24" />

      <div className="relative w-full md:aspect-video">
        <FinishJourney className="hidden md:block" />
      </div>

      <PortfolioSection className="py-16" />

      <FAQ className="py-16" />

      <div className="relative w-full hidden md:block md:aspect-video">
        <FaqJourney />
      </div>

      <ContactInformation className="py-16" />

      <Footer className="" />
    </main>
  );
}

export const runtime = "edge";
