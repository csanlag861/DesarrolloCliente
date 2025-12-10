import stylesCard from "./card.module.css";

const Card = ({ url, talla, precio, nombre, alt, cantidad }) => {
  return (
    <div className={stylesCard.container}>
      <div className={stylesCard.imagen}>
        <img src={`${url}`} alt={alt} />
        <div className={stylesCard.cantidad}>
          <h3>{cantidad}</h3>
        </div>
      </div>
      <div className={stylesCard.info}>
        <h3>{nombre}</h3>
        <h3 className={stylesCard.talla}>{talla}</h3>
      </div>
      <div className={stylesCard.precio}>
        <h3>€{precio*cantidad}</h3>
      </div>
    </div>
  );
};

export default Card;
