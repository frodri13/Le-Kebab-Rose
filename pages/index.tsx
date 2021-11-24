import type { NextPage } from "next";
import burger from "../public/burger.svg";
import Image from "next/image";
import drink from "../public/drink.svg";
import salad from "../public/salad.svg";
import kebab from "../public/kebab.png";
import dessert from "../public/dessert.svg";
import sandwich from "../public/sandwich.svg";
import taco from "../public/taco.svg";

const Home: NextPage = () => {
  return (
    <section>
      <div className="menu">
        <div>
          <Image src={salad} alt={``} width={200} height={200} />

          <h3>ENTREE</h3>
        </div>
        <div>
          <Image src={sandwich} alt={``} width={200} height={200} />

          <h3>SANDWICH</h3>
        </div>
        <div>
          <Image src={sandwich} alt={``} width={200} height={200} />

          <h3>PANINI</h3>
        </div>
        <div>
          <Image src={burger} alt={`Pink burger`} width={200} height={200} />
          <h3>BURGER</h3>
        </div>
        <div>
          <Image src={taco} alt={``} width={200} height={200} />

          <h3>TEX MEX</h3>
        </div>
        <div>
          <Image src={kebab} alt={``} width={200} height={200} />

          <h3>ASSIETTE</h3>
        </div>
        <div>
          <Image src={dessert} alt={``} width={200} height={200} />

          <h3>DESSERT</h3>
        </div>
        <div>
          <Image src={drink} alt={``} width={200} height={200} />

          <h3>BOISSON</h3>
        </div>
      </div>
    </section>
  );
};

export default Home;
