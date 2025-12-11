import { useState, useEffect, useRef } from "react";
import styles from "./editorial.module.css";
import { getAllArticulos } from "../../utils/querys";

const Editorial = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [articulos, setArticulos] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchArticulos = async () => {
      const data = await getAllArticulos();
      setArticulos(data);
    };
    fetchArticulos();
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(
              (prev) => new Set([...prev, entry.target.dataset.id])
            );
          }
        });
      },
      { threshold: 0.15, rootMargin: "50px" }
    );

    const cards = document.querySelectorAll("[data-id]");
    cards.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
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
        <article
          data-id={articuloHero.id}
          className={`${styles.articuloHero} ${
            visibleCards.has(String(articuloHero.id)) ? styles.visible : ""
          }`}
        >
          <div className={styles.featuredImageWrapper}>
            <img
              src={articuloHero.image}
              alt={articuloHero.title}
              className={styles.featuredImage}
            />
            <div className={styles.featuredOverlay}></div>
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

      {/* Grid Editorial con ritmo visual */}
      <main className={styles.main}>


        {/* Grid con ritmo visual variado */}
        <div className={styles.articulosGrid}>
          {articulos.slice(1).map((article, index) => (
            <article
              key={article.id}
              data-id={article.id}
              className={`${styles.article} ${styles[article.type]} ${
                visibleCards.has(String(article.id)) ? styles.visible : ""
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={styles.articleImageWrapper}>
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.articleImage}
                />
                <div className={styles.articleOverlay}></div>
              </div>
              <div className={styles.articleContent}>
                <span className={styles.articleCategory}>
                  {article.category}
                </span>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleTagline}>{article.tagline}</p>
                {article.type !== "small" && (
                  <p className={styles.articleDescription}>
                    {article.description}
                  </p>
                )}
                <div className={styles.articleMeta}>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Editorial;
