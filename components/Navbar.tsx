import Image from "next/image";
import logo from "../public/logo.svg";

function navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>+3309324242</h1>
        <Image
          src={logo}
          alt={`Logo de le Kebab Rose`}
          width={200}
          height={200}
        />
      </div>
      <div className="navContent">
        <div className="list">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
          </ul>
        </div>
        <div className="cart">
          <h3>Cart</h3>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
