import Logo from "./logo";
import Navigation from "./navigation";

const Header = ({ className }: { className: string }) => {
  return (
    <header
      className={`${className} flex flex-col md:flex-row pt-10 md:pt-12 pb-6 items-center md:items-end md:justify-between md:p-8 bg-[#212520] md:bg-transparent`}
    >
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
