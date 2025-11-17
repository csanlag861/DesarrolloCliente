import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import stylesGaleria from './galeria.module.css';

gsap.registerPlugin(ScrollTrigger);

const Galeria = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Animación para cada sección
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Parallax para imágenes dentro de cada sección
      const images = section.querySelectorAll(`.${stylesGaleria.parallaxImg}`);
      images.forEach((img) => {
        gsap.to(img, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className={stylesGaleria.container}>
      {/* Sección 1: Intro Hero Minimal */}
      <section ref={addToRefs} className={stylesGaleria.heroSection}>
        <div className={stylesGaleria.heroContent}>
          <h1 className={stylesGaleria.heroTitle}>Galería</h1>
          <p className={stylesGaleria.heroSubtitle}>
            Una mirada al universo visual de Lovestar
          </p>
        </div>
      </section>

      {/* Sección 2: Lookbook Grid Editorial */}
      <section ref={addToRefs} className={stylesGaleria.lookbookSection}>
        <div className={stylesGaleria.lookbookContainer}>
          <div className={stylesGaleria.gridContainer}>
            {/* Imagen grande */}
            <div className={`${stylesGaleria.gridItem} ${stylesGaleria.gridItemLarge}`}>
              <img 
                src="/img/look2.webp" 
                alt="Lookbook 001"
                className={stylesGaleria.parallaxImg}
              />
            </div>

            {/* Imagen mediana */}
            <div className={`${stylesGaleria.gridItem} ${stylesGaleria.gridItemMedium}`}>
              <img 
                src="/img/look1.webp" 
                alt="Lookbook 002"
                className={stylesGaleria.parallaxImg}
              />
            </div>

            {/* Imagen pequeña */}
            <div className={`${stylesGaleria.gridItem} ${stylesGaleria.gridItemSmall}`}>
              <img 
                src="/img/look3.webp" 
                alt="Lookbook 003"
                className={stylesGaleria.parallaxImg}
              />
            </div>

            {/* Espacio en blanco intencional */}
            <div className={`${stylesGaleria.gridItem} ${stylesGaleria.gridItemEmpty}`}>
              <p className={stylesGaleria.dropLabel}>DROP 002</p>
            </div>

            {/* Imagen mediana */}
            <div className={`${stylesGaleria.gridItem} ${stylesGaleria.gridItemMediumAlt}`}>
              <img 
                src="/img/look2.webp" 
                alt="Lookbook 004"
                className={stylesGaleria.parallaxImg}
              />
            </div>
          </div>

          <div className={stylesGaleria.lookbookFooter}>
            <p className={stylesGaleria.lookbookCaption}>
              LOOKBOOK — DROP 002: A LOVESTORY
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Storytelling Hero */}
      <section ref={addToRefs} className={stylesGaleria.storytellingSection}>
        <div className={stylesGaleria.storytellingContainer}>
          <div className={stylesGaleria.storytellingGrid}>
            {/* Imagen */}
            <div className={stylesGaleria.storytellingImage}>
              <img 
                src="/img/look1.webp" 
                alt="A Lovestory Campaign"
                className={stylesGaleria.parallaxImg}
              />
            </div>

            {/* Texto */}
            <div className={stylesGaleria.storytellingText}>
              <h2 className={stylesGaleria.storytellingTitle}>A Lovestory</h2>
              <p className={stylesGaleria.storytellingDrop}>Drop 002</p>
              <p className={stylesGaleria.storytellingDescription}>
                Una colección inspirada en la forma en que el amor se mueve, cambia y se siente. 
                Prendas pensadas para capturar momentos reales: calles, museos, trenes, atardeceres. 
                No queríamos crear ropa; queríamos contar una historia. Esta es la tuya. Esta es la nuestra.
              </p>
              <button className={stylesGaleria.storytellingButton}>
                <span>Ver la colección</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Behind the Scenes Moodboard */}
      <section ref={addToRefs} className={stylesGaleria.btsSection}>
        <div className={stylesGaleria.btsContainer}>
          <h3 className={stylesGaleria.btsTitle}>Behind the Scenes</h3>

          {/* Moodboard collage */}
          <div className={stylesGaleria.moodboardGrid}>
            {/* Textura */}
            <div className={`${stylesGaleria.moodboardItem} ${stylesGaleria.moodItemTexture}`}>
              <img 
                src="/img/look3.webp" 
                alt="Linen Texture"
                className={stylesGaleria.parallaxImg}
              />
            </div>

            {/* Polaroid */}
            <div className={`${stylesGaleria.moodboardItem} ${stylesGaleria.moodItemPolaroid}`}>
              <img 
                src="/img/look2.webp" 
                alt="Paris Polaroid"
                className={stylesGaleria.parallaxImg}
              />
            </div>

            {/* Coordenadas */}
            <div className={`${stylesGaleria.moodboardItem} ${stylesGaleria.moodItemCoords}`}>
              <div className={stylesGaleria.coordsBox}>
                <p className={stylesGaleria.coordsCity}>PARIS</p>
                <p className={stylesGaleria.coordsLat}>48.8566° N</p>
                <p className={stylesGaleria.coordsLon}>2.3522° E</p>
              </div>
            </div>

            {/* Paleta */}
            <div className={`${stylesGaleria.moodboardItem} ${stylesGaleria.moodItemPalette}`}>
              <div className={`${stylesGaleria.parallaxImg} ${stylesGaleria.paletteBox}`}>
                <div className={stylesGaleria.paletteColor1}></div>
                <div className={stylesGaleria.paletteColor2}></div>
                <div className={stylesGaleria.paletteColor3}></div>
              </div>
            </div>

            {/* Sketch */}
            <div className={`${stylesGaleria.moodboardItem} ${stylesGaleria.moodItemSketch}`}>
              <div className={`${stylesGaleria.parallaxImg} ${stylesGaleria.sketchBox}`}>
                <p className={stylesGaleria.sketchText}>
                  "CADA PRENDA CUENTA<br />UNA HISTORIA DIFERENTE"
                </p>
              </div>
            </div>

            {/* Foto no final */}
            <div className={`${stylesGaleria.moodboardItem} ${stylesGaleria.moodItemOuttake}`}>
              <img 
                src="/img/look1.webp" 
                alt="Outtake 7"
                className={stylesGaleria.parallaxImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: Final CTA */}
      <section ref={addToRefs} className={stylesGaleria.ctaSection}>
        <div className={stylesGaleria.ctaContent}>
          <h4 className={stylesGaleria.ctaTitle}>Explora el universo Lovestar</h4>
          <p className={stylesGaleria.ctaSubtitle}>
            Descubre más en nuestro lookbook completo
          </p>
          <button className={stylesGaleria.ctaButton}>
            Ver lookbook completo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Galeria;