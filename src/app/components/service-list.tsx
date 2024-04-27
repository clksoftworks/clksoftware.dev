import Image from "next/image";
import serviceListImage from "../../../public/service-list.png";

export default function ServiceList() {
  return (
    <section className="relative">
      <Image src={serviceListImage} alt="Service List" className="w-full" />
    </section>
  );
}