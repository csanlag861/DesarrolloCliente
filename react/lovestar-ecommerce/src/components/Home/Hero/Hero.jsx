import stylesHero from "./hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={stylesHero.hero}>
      <div className={stylesHero.imagen}>
        <div className={stylesHero["imagen__text"]}>
          <h1>Cada prenda cuenta una historia.</h1>
          <p>
            Conoce la nuestra:{" "}
            <b>
              <i>"A Lovestory."</i>
            </b>
          </p>
        </div>
        <div className={stylesHero.btn}>
          <div className={`${stylesHero["btn__shopnow"]} sheen`}>
            <Link to="/Tienda">SHOP NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
