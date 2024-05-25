import Image from "next/image";
import mapImage from "../../../public/footer-background.png";
import AmericanHeartIcon from "./american-heart-icon";

const Footer = ({ className }: { className: string }) => {
  return (
    <footer className="py-6 text-center relative">
      <p className="font-signature text-xl justify-center flex items-center w-full space-x-4 text-shadow z-10 relative">
        <span>Made with</span>
        <AmericanHeartIcon />
        <span>in Kansas</span>
      </p>

      <Image
        src={mapImage}
        alt="A map of Kansas"
        fill
        className="z-0 object-cover"
      />
    </footer>
  );
};

export default Footer;
