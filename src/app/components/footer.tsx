import Image from "next/image";
import mapImage from "../../../public/footer-background.png";
import AmericanHeartIcon from "./american-heart-icon";
import SessionService from "../services/session-service";

const Footer = async ({ className }: { className: string }) => {
  const session = await SessionService.getSession();

  return (
    <footer className="py-4 text-center relative">
      <p className="font-signature justify-center flex items-center w-full space-x-2 text-shadow z-10 relative">
        <span>Made with</span>
        <AmericanHeartIcon />
        <span>in Kansas</span>
      </p>

      {(session && (
        <a href="/api/auth/logout" className="text-xs font-business mt-4 z-10 relative">
          Logout
        </a>
      )) ?? (
        <a href="/api/auth/login" className="text-xs font-business mt-4 z-10 relative">
          Login
        </a>
      )}

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
