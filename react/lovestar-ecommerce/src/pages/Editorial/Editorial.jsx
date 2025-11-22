import React, { useState, useEffect, useRef } from 'react';
import styles from './editorial.module.css';

const EditorialArticles = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  // Artículos editoriales con diferentes tamaños y layouts
  const articles = [
    {
      id: 'featured',
      type: 'featured',
      image: 'img/slider-001.webp',
      category: 'DESTACADO',
      title: 'Colección Otoño: Raíces',
      tagline: 'Cuando el pasado encuentra el presente. Una conversación entre generaciones.',
      description: 'Exploramos la herencia artesanal de nuestros orígenes, reimaginada para el mundo contemporáneo.',
      date: '15 Nov 2024',
      readTime: '8 min'
    },
    {
      id: 1,
      type: 'large',
      image: 'img/slider-002.webp',
      category: 'COLABORACIÓN',
      title: 'Lovestar × Estudio Creativo',
      tagline: 'Dos corazones, una visión. El amor se une en un solo símbolo.',
      description: 'Una colaboración exclusiva que une moda y arte urbano.',
      date: '10 Nov 2024',
      readTime: '6 min'
    },
    {
      id: 2,
      type: 'normal',
      image: 'img/slider-003.webp',
      category: 'DETRÁS DE ESCENAS',
      title: 'El proceso creativo',
      tagline: 'Cada puntada cuenta una historia. Cada hilo es una decisión.',
      description: 'Un vistazo íntimo al proceso de creación de nuestra última colección.',
      date: '8 Nov 2024',
      readTime: '4 min'
    },
    {
      id: 3,
      type: 'normal',
      image: 'img/slider-004.webp',
      category: 'SOSTENIBILIDAD',
      title: 'Materiales conscientes',
      tagline: 'La belleza que respeta. El diseño que perdura.',
      description: 'Nuestro compromiso con el planeta a través de la elección de materiales.',
      date: '5 Nov 2024',
      readTime: '5 min'
    },
    {
      id: 4,
      type: 'large',
      image: 'img/slider-005.webp',
      category: 'LOOKBOOK',
      title: 'Temporada de Transiciones',
      tagline: 'Entre estaciones. Entre mundos. Siempre en movimiento.',
      description: 'Las prendas que te acompañan en los cambios, en los viajes, en la vida.',
      date: '1 Nov 2024',
      readTime: '7 min'
    },
    {
      id: 5,
      type: 'small',
      image: 'img/slider-006.webp',
      category: 'COMUNIDAD',
      title: 'Voces de Lovestar',
      tagline: 'Historias reales. Personas reales.',
      description: 'Nuestra comunidad comparte sus experiencias.',
      date: '28 Oct 2024',
      readTime: '3 min'
    },
    {
      id: 6,
      type: 'small',
      image: 'img/slider-007.webp',
      category: 'INSPIRACIÓN',
      title: 'Arquitectura y Moda',
      tagline: 'Las líneas que nos construyen.',
      description: 'Cómo el diseño arquitectónico inspira nuestras siluetas.',
      date: '25 Oct 2024',
      readTime: '4 min'
    },
    {
      id: 7,
      type: 'normal',
      image: 'img/slider-008.webp',
      category: 'ENTREVISTA',
      title: 'Conversaciones: María Sánchez',
      tagline: 'La fotografía como lenguaje. El silencio como respuesta.',
      description: 'Hablamos con la fotógrafa detrás de nuestra última campaña.',
      date: '20 Oct 2024',
      readTime: '6 min'
    }
  ];

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

      {/* Newsletter Section */}
      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>Sigue la historia</h2>
          <p className={styles.newsletterText}>
            Recibe nuestras últimas historias, colaboraciones y lanzamientos directamente en tu inbox.
          </p>
          <div className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="tu@email.com"
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterButton}>Suscribirme</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2024 Lovestar</p>
          <div className={styles.footerLinks}>
            <a href="#">Instagram</a>
            <a href="#">Newsletter</a>
            <a href="#">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EditorialArticles;