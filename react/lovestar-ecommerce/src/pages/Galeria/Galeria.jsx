import stylesGaleria from "./galeria.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GallerySection from "../../components/Secciones/Galeria/Sec-Galeria";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  gsap.to(".parallax-bg", {
    y: 100, // mueve la imagen 100px hacia abajo al hacer scroll
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true, // esto hace que el movimiento siga el scroll
    },
  });

  return (
    <>
      <section className={stylesGaleria.hero}>
        <div className={stylesGaleria["parallax-bg"]}></div>
        <div className={stylesGaleria.content}>
          <h1>Hola, mundo</h1>
          <p>Scroll para ver el efecto parallax</p>
        </div>
        <div className={stylesGaleria.content}>
          <h1>Hola, mundo</h1>
          <p>Scroll para ver el efecto parallax</p>
        </div>
        <div className={stylesGaleria.content}>
          <h1>Hola, mundo</h1>
          <p>Scroll para ver el efecto parallax</p>
        </div>
        <div className={stylesGaleria.content}>
          <h1>Hola, mundo</h1>
          <p>Scroll para ver el efecto parallax</p>
        </div>
        <div className={stylesGaleria.content}>
          <h1>Hola, mundo</h1>
          <p>Scroll para ver el efecto parallax</p>
        </div>
        <div className={stylesGaleria.content}>
          <h1>Hola, mundo</h1>
          <p>Scroll para ver el efecto parallax</p>
        </div>
      </section>
      <section className={stylesGaleria["other-content"]}>
        <p>Más contenido abajo...</p>
      </section>
    </>
  );
};

export default Gallery;
