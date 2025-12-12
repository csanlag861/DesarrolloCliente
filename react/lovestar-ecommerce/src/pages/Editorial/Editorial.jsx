import { useState, useEffect } from "react";
import styles from "./editorial.module.css";
import { getAllArticulos } from "../../utils/querys";

import Card from "../../components/Cards/Card-Editorial/Card";

const Editorial = () => {
  const [articulos, setArticulos] = useState(null);

  useEffect(() => {
    const fetchArticulos = async () => {
      const data = await getAllArticulos();
      setArticulos(data);
    };
    fetchArticulos();
  }, []);

  const articuloHero = articulos?.find((art) => art.type === "featured");

  if (!articulos) return <p>Cargando...</p>;

  return (
    <section className={styles.section}>
      <div className={styles.lovestar}>
        <h2>LoveEditorial*</h2>
        <h3>by Lovestar.</h3>
      </div>

      <div className={styles.hero}>
        <article className={`${styles.articuloHero}`}>
          <div className={styles.imageHero}>
            <img
              src={articuloHero.image}
              alt={articuloHero.title}
              className={styles.featuredImage}
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.featuredBadge}>
              {articuloHero.category}
            </span>
            <h2 className={styles.featuredTitle}>{articuloHero.title}</h2>
            <p className={styles.featuredTagline}>{articuloHero.tagline}</p>
            <p className={styles.featuredDescription}>
              {articuloHero.description}
            </p>
            <div className={styles.featuredMeta}>
              <span>{articuloHero.date}</span>
              <span>•</span>
              <span>{articuloHero.readTime} lectura</span>
            </div>
          </div>
        </article>
      </div>

      <div className={styles.grid}>
        {articulos && 
        articulos.slice(1).map((art, index) => (
          <Card key={index} articulo={art} />
        ))
        }
      </div>
    </section>
  );
};

export default Editorial;
