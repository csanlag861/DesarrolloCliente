import Contador from "../../components/Intro/Contador/Contador";
import Lovestar from "../../components/Intro/Lovestar/Lovestar";
import Footer from "../../components/Intro/Footer/Footer";
import stylesIntro from "./intro.module.css";

import useRedireccion from "../../hooks/useRedireccion";
function Intro() {
/*   useRedireccion();
 */  return (
    <section className={stylesIntro.container}>
      <Contador />
      <div className={stylesIntro.lov}>
        <Lovestar />
      </div>
      <Footer />
    </section>
  );
};

export default Intro;
