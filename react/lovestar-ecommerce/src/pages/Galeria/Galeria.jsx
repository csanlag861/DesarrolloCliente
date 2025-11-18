import stylesGaleria from "./galeria.module.css";
import GallerySection from "../../components/Secciones/Galeria/Sec-Galeria";

function Galeria() {
  return (
    <>
      <section className={stylesGaleria.section}>
        <div className={stylesGaleria.lovestar}>
          <h2>LoveGallery*</h2>
          <h3>by Lovestar.</h3>
        </div>
        <GallerySection />
      </section>
    </>
  );
}

export default Galeria;
