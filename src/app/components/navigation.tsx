export default function Navigation() {
  return (
    <nav className="flex justify-center font-business font-semibold">
      <ul className="flex space-x-6 md:text-xl md:space-x-8 uppercase">
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
