import stylesCard from "./card.module.css";

import { Icon } from "@iconify/react";

const Card = ({ id, nombre, talla, cantidad, precio, url, alt }) => {

    return (
        <div className={stylesCard.card}>
            <div className={stylesCard.imagen}>
                <img src={url} alt={alt} />
            </div>
            <div className={stylesCard.info}>
                <div className={stylesCard.detalles}>
                    <h2>{nombre}</h2>
                    {talla && (<h4>Talla: {talla}</h4>)}
                    <h4>Cantidad: {cantidad}</h4>
                </div>
                <div className={stylesCard.extras}>
                    <button className={stylesCard.cerrar}>
                        <Icon icon="material-symbols:close" />
                    </button>
                    <h2>€{precio}</h2>
                </div>
{/*                 
                <h4>Cantidad{cantidad}</h4> */}
            </div>
        </div>
    );
};

export default Card;
