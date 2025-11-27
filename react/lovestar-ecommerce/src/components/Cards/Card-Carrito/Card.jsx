import stylesCard from "./card.module.css";

import { Icon } from "@iconify/react";

const Card = ({ id, nombre, talla, cantidad, precio, url, alt}) => {

    return (
        <div className={stylesCard.card}>
            <img src={url} alt={alt} />
            <h4> ID{id}</h4>
            <h4>Nombre {nombre}</h4>
            <h4>Talla {talla}</h4>
            <h4>Precio {precio}</h4>
            <h4>Cantidad{cantidad}</h4>
        </div>
    );
};

export default Card;
