import stylesGaleria from "./galeria.module.css";

const GallerySection = () => {
  return (
      <div className={stylesGaleria.banner}>
        <div className={stylesGaleria.slider} style={{ "--quantity": 8 }}>
          <div className={stylesGaleria.item} style={{ "--position": 1 }}>
            <img src="img/slider-001.webp" alt="" />
          </div>
          <div className={stylesGaleria.item} style={{ "--position": 2 }}>
            <img src="img/slider-002.webp" alt="" />
          </div>
          <div className={stylesGaleria.item} style={{ "--position": 3 }}>
            <img src="img/slider-003.webp" alt="" />
          </div>
          <div className={stylesGaleria.item} style={{ "--position": 4 }}>
            <img src="img/slider-004.webp" alt="" />
          </div>
          <div className={stylesGaleria.item} style={{ "--position": 5 }}>
            <img src="img/slider-005.webp" alt="" />
          </div>
          <div className={stylesGaleria.item} style={{ "--position": 6 }}>
            <img src="img/slider-006.webp" alt="" />
          </div>
          <div className={stylesGaleria.item} style={{ "--position": 7 }}>
            <img src="img/slider-007.webp" alt="" />
          </div>
          <div className={stylesGaleria.item} style={{ "--position": 8 }}>
            <img src="img/slider-008.webp" alt="" />
          </div>
        </div>
      </div>
  );
};

export default GallerySection;
