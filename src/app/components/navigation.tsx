export default function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex space-x-4 text-2xl uppercase">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
