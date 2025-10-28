import stylesInspiracion from "./inspiracion.module.css";
import Card from "../../Cards/Card-Home/Card";

const Inspiracion = () => {
    const imgCardsURL = ["card-001.jpg", "card-002.jpg", "card-003.jpg", "card-004.jpg", "card-005.jpg", "card-006.jpg", "card-007.jpg", "card-008.jpg"];

    return (
        <section className={stylesInspiracion.inspiracion}>
            <h2>Inspirate en quienes ya visten "Lovestar"</h2>
            <div className={stylesInspiracion["inspiracion__cards"]}>
                {imgCardsURL.map((img, id) => (
                    <Card key={id} card={{url: `/img/${img}`, alt: "Imagen Lovestar"}} />
                ))}
                {imgCardsURL.map((img, id) => (
                    <Card key={id} card={{url: `/img/${img}`, alt: "Imagen Lovestar"}} />
                ))}
            </div>
        </section>
    )
}

export default Inspiracion;