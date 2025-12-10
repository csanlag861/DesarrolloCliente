import { useState, useEffect, useRef } from 'react';
import styles from './editorial.module.css';

const EditorialArticles = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('[data-id]');
    cards.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Header Editorial */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <p className={styles.headerLabel}>EDITORIAL</p>
          <h1 className={styles.headerTitle}>Historias de Lovestar</h1>
          <p className={styles.headerSubtitle}>
            Las personas, procesos y momentos que dan forma a nuestra visión
          </p>
        </div>
      </header>

      {/* Grid Editorial con ritmo visual */}
      <main className={styles.main}>
        {/* FEATURED ARTICLE - Hero */}
        <article 
          data-id={articles[0].id}
          className={`${styles.articleFeatured} ${
            visibleCards.has(String(articles[0].id)) ? styles.visible : ''
          }`}
        >
          <div className={styles.featuredImageWrapper}>
            <img 
              src={articles[0].image} 
              alt={articles[0].title}
              className={styles.featuredImage}
            />
            <div className={styles.featuredOverlay}></div>
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.featuredBadge}>{articles[0].category}</span>
            <h2 className={styles.featuredTitle}>{articles[0].title}</h2>
            <p className={styles.featuredTagline}>{articles[0].tagline}</p>
            <p className={styles.featuredDescription}>{articles[0].description}</p>
            <div className={styles.featuredMeta}>
              <span>{articles[0].date}</span>
              <span>•</span>
              <span>{articles[0].readTime} lectura</span>
            </div>
          </div>
        </article>

        {/* Grid con ritmo visual variado */}
        <div className={styles.articlesGrid}>
          {articles.slice(1).map((article, index) => (
            <article
              key={article.id}
              data-id={article.id}
              className={`${styles.article} ${styles[article.type]} ${
                visibleCards.has(String(article.id)) ? styles.visible : ''
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
                <span className={styles.articleCategory}>{article.category}</span>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleTagline}>{article.tagline}</p>
                {article.type !== 'small' && (
                  <p className={styles.articleDescription}>{article.description}</p>
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
    </div>
  );
};

export default EditorialArticles;