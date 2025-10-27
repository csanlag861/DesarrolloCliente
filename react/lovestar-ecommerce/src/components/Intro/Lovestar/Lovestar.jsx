import stylesLovestar from "./lovestar.module.css";

import { gsap } from "gsap";
import ScrambleTextPlugin from "gsap/dist/ScrambleTextPlugin";

import { useEffect, useRef } from "react";

import {Link} from "react-router-dom";

gsap.registerPlugin(ScrambleTextPlugin);

const ScrambleLogo = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { scrambleText: { text: "", chars: "upperCase" } },
      {
        scrambleText: {
          text: "Lovestar",
          revealDelay: 0.2,
          speed: 0.4,
        },
        duration: 2.5,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  }, []);

  return (
    <div className={stylesLovestar["text-lovestar"]}>
      <p ref={textRef}></p>
      <Link to="/Home">ENTRAR</Link>
    </div>
  );
};

export default ScrambleLogo;

// const Lovestar = () => {
//   return (
//     <div className={stylesLovestar["text-lovestar"]}>
//       <img src="img/alt-logo.svg" alt="Logo secundario de Lovestar" />
//       <a href="Home">Entrar</a>
//     </div>
//   );
// };

// export default Lovestar;
