import Image from "next/image";
import logo from "../public/logo.svg";

function navbar() {
  return (
    <nav>
      <Image
        src={logo}
        alt={`Logo de le Kebab Rose`}
        width={200}
        height={200}
      />
      <div></div>
    </nav>
  );
}

export default navbar;
