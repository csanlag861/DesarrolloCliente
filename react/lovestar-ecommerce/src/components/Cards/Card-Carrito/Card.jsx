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
                    <div className={stylesCard.cantidad}>
                        <div className={stylesCard.contador}>-</div>
                        <h3>{cantidad}</h3>
                        <div className={stylesCard.contador}>+</div>
                    </div>
                </div>
                <div className={stylesCard.extras}>
                    <button className={stylesCard.cerrar}>
                        <Icon icon="material-symbols:close" />
                    </button>
                    <h2>€{precio*cantidad}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;
