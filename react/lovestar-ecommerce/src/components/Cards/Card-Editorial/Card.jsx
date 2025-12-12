import stylesCard from "./card.module.css";

const Card = ({ articulo }) => {
    
  return (
    <article className={`${stylesCard.articulo} ${stylesCard[articulo.type]}`}>
      <div className={stylesCard.image}>
        <img
          src={articulo.image}
          alt={articulo.title}
          className={stylesCard.articuloImage}
        />
        <div className={stylesCard.overlay}></div>
      </div>
      <div className={stylesCard.articleContent}>
        <span className={stylesCard.articleCategory}>{articulo.category}</span>
        <h3 className={stylesCard.articleTitle}>{articulo.title}</h3>
        <p className={stylesCard.articleTagline}>{articulo.tagline}</p>
        {articulo.type !== "small" && (
          <p className={stylesCard.articleDescription}>{articulo.description}</p>
        )}
        <div className={stylesCard.articleMeta}>
          <span>{articulo.date}</span>
          <span>•</span>
          <span>{articulo.readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
