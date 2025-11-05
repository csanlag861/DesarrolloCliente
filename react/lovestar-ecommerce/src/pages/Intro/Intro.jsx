import Contador from "../../components/Intro/Contador/Contador";
import Lovestar from "../../components/Intro/Lovestar/Lovestar";
import Footer from "../../components/Intro/Footer/Footer";
import stylesIntro from "./intro.module.css";

import useRedireccion from "../../hooks/useRedireccion";
function Intro () {
  useRedireccion();
  return (
    <div className={stylesIntro.container}>
        <Contador />
        <Lovestar />
        <Footer />
    </div>
  );
};

export default Intro;
