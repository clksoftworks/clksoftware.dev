import Logomark from "./logomark";

export default function Logo() {
  return (
    <div
      className="flex space-x-4 items-end justify-center md:justify-start md:mb-0 mb-6"
      id="home"
    >
      <Logomark />

      <h1 className="text-2xl font-display text-left">
        CLK
        <br />
        Software
      </h1>
    </div>
  );
}
