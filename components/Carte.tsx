import burger from "../public/burger.svg";
import Image from "next/image";
import drink from "../public/drink.svg";
import salad from "../public/salad.svg";
import kebab from "../public/kebab.png";
import dessert from "../public/dessert.svg";
import sandwich from "../public/sandwich.svg";
import taco from "../public/taco.svg";

function Carte() {
  return (
    <section className="carte">
      <div className="menu">
        <div>
          <Image src={salad} alt={``} width={100} height={100} />

          <h3>ENTREE</h3>
        </div>
        <div>
          <Image src={sandwich} alt={``} width={100} height={100} />

          <h3>SANDWICH</h3>
        </div>
        <div>
          <Image src={sandwich} alt={``} width={100} height={100} />

          <h3>PANINI</h3>
        </div>
        <div>
          <Image src={burger} alt={`Pink burger`} width={100} height={100} />
          <h3>BURGER</h3>
        </div>
        <div>
          <Image src={taco} alt={``} width={100} height={100} />

          <h3>TEX MEX</h3>
        </div>
        <div>
          <Image src={kebab} alt={``} width={100} height={100} />

          <h3>ASSIETTE</h3>
        </div>
        <div>
          <Image
            src={dessert}
            alt={`Image of a cupcake`}
            width={100}
            height={100}
          />

          <h3>DESSERT</h3>
        </div>
        <div>
          <Image
            src={drink}
            alt={`Image of a bottle.`}
            width={100}
            height={100}
          />

          <h3>BOISSON</h3>
        </div>
      </div>
    </section>
  );
}
export default Carte;
