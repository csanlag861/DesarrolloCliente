import stylesGaleria from "./galeria.module.css";
import GallerySection from "../../components/Secciones/Galeria/Sec-Galeria";

function Galeria() {
  return (
    <>
      <section className={stylesGaleria.section}>
        <h2>LoveGallery</h2>
        <GallerySection />
      </section>
    </>
  );
}

export default Galeria;
