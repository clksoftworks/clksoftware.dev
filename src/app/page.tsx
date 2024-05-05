import { Metadata } from "next";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ServiceList from "./components/service-list";
import ComparisonPanel from "./components/comparison-panel";
import CallToAction from "./components/call-to-action";
import FinishJourney from "./components/journey/finish-journey";
import ContactInformation from "./components/contact-information";
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
    <main className="max-w-7xl w-full min-h-screen flex-col font-sans bg-[#384136] relative z-10 mx-auto border-4 border-black">
      <Header className="mb-8" />

      <Hero className="mb-12" />

      <CallToAction className="mb-12" />

      <ServiceList className="mb-12" />

      <ComparisonPanel className="mb-12" />

      <FinishJourney className="mb-12 pl-8" />

      <ContactInformation className="mb-12" />

      <Footer className="" />
    </main>
  );
}
