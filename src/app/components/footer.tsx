import Image from "next/image";
import mapImage from "../../../public/footer-background.png";
import AmericanHeartIcon from "./american-heart-icon";

export default function Footer() {
  return (
    <footer className="border-[3px] border-t-0 py-6 text-center border-black relative">
      <p className="font-signature text-xl justify-center flex items-center w-full space-x-4 text-shadow z-10 relative">
        <span>Made with</span>
        <AmericanHeartIcon />
        <span>in Kansas</span>
      </p>

      <Image src={mapImage} alt="A map of Kansas" fill className="z-0" />
    </footer>
  );
}
