import styleCard from "./card.module.css";

import { useState } from "react";

const Card = ({ card }) => {
  const [hover, setHover] = useState(false);

  const styleColor = {
    width: "10px",
    height: "10px",
    borderRadius: "1000px",
    gap: "4px"
  };
  return (
    <div className={styleCard.card}>
      <div className={styleCard.imagen}>
        
        <img 
         src={hover ? card.url_r : card.url}
         onMouseEnter={() => {setHover(true)}}
         onMouseLeave={() => {setHover(false)}}
         alt={card.alt} />

      </div>
      <div className={styleCard.text}>
        <h3>{card.nombre}</h3>
        <p className={styleCard.precio}>€{card.precio}</p>
        <p className={styleCard.talla}>{card.talla}</p>
        <div className={styleCard.colores}>
          {card.colores.map((color, id) => (

            <div
              key={id}
              style={{ ...styleColor, backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
