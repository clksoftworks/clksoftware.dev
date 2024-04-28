export default function Navigation() {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-8 text-2xl uppercase">
        <li>
          <a href="#home" className="animate-underline-from-center">
            Home
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
