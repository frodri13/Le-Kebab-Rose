import type { NextPage } from "next";
import Head from "next/head";
import Carte from "../components/carte/Carte";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Le Kebab Rose</title>
        <link rel="icon" href="../public/burger.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Carte />
    </div>
  );
};

export default Home;
