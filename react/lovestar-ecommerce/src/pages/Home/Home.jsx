import Hero from "../../components/Home/Hero/Hero";
import Inpsiracion from "../../components/Home/Inspiracion/Inspiracion";

import stylesHome from "./home.module.css";


function Home() {

  return (
    <>
      <div className={stylesHome["container-hero"]}>
        <Hero />
      </div>
        <Inpsiracion />
    </>
  );
}

export default Home;
