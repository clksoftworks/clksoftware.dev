import Logo from "./logo";
import Navigation from "./navigation";

const Header = ({ className }: { className: string }) => {
  return (
    <header
      className={`${className} flex flex-col md:flex-row p-8 pb-6 items-center md:justify-between md:p-16 lg:p-24 bg-[#212520]`}
    >
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
