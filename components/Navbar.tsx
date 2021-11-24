import Image from "next/image";
import logo from "../public/logo.svg";

function navbar() {
  return (
    <nav>
      <div className="logo">
        <h3>+33798342803</h3>
        <Image
          src={logo}
          alt={`Logo de le Kebab Rose`}
          width={200}
          height={200}
        />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
      </ul>
      <h3>Cart</h3>
    </nav>
  );
}

export default navbar;
