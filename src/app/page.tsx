import { Metadata } from "next";
import Image from "next/image";
import backgroundPicture from "../../public/background.png";
import placeholder from "../../public/placeholder.png";

export const metadata: Metadata = {
  title: "Transform Your Business with CLK Software: Expert Development, Consulting, and Prototyping Services",
  description: 
    `Unlock your business potential with CLK Software LLC. Explore our expert development, 
    consulting, and prototyping services tailored to elevate your projects to new heights. 
    Trust our experienced team to guide you through technology stack selection, system design, 
    and prototyping, ensuring optimal outcomes for your business.`,
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#384136] relative">
      <Image src={placeholder} alt="Test" style={{zIndex: 2}} />
      <Image src={backgroundPicture} alt="Test" fill style={{zIndex: 1, objectFit: 'cover'}} />
    </main>
  );
}
