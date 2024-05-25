import { Metadata } from "next";
import Footer from "./components/footer";
import Hero from "./components/blocks/hero";
import ServiceList from "./components/blocks/service-list";
import ComparisonPanel from "./components/blocks/comparison-panel";
import CallToAction from "./components/blocks/call-to-action";
import FinishJourney from "./components/blocks/journey/finish-journey";
import ContactInformation from "./components/blocks/contact-information";
import Header from "./components/header";

export const metadata: Metadata = {
  title:
    "Transform Your Business with CLK Software: Expert Development, Consulting, and Prototyping Services",
  description: `Unlock your business potential with CLK Software LLC. Explore our expert development, 
    consulting, and prototyping services tailored to elevate your projects to new heights. 
    Trust our experienced team to guide you through technology stack selection, system design, 
    and prototyping, ensuring optimal outcomes for your business.`,
};

export default function Home() {
  return (
    <main className="max-w-7xl w-full min-h-screen flex-col font-sans bg-[#384136] relative z-10 mx-auto md:border-4 md:border-black">
      <Header className="mb-4" />

      <Hero className="mb-16" />

      <CallToAction className="mb-16" />

      <ServiceList className="mb-16" />

      <ComparisonPanel className="mb-0 md:mb-24" />

      <FinishJourney className="mb-24 pl-8 hidden md:block" />

      <ContactInformation className="py-16" />

      <Footer className="" />
    </main>
  );
}
