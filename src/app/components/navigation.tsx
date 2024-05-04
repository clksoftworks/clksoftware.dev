export default function Navigation() {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4 text-xl sm:space-x-6 md:text-2xl md:space-x-8 uppercase">
        <li>
          <a href="#home" className="animate-underline-from-center">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="animate-underline-from-center">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="animate-underline-from-center">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="animate-underline-from-center">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
