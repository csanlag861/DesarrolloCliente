import stylesDetalles from "./detalles.module.css";

const Detalles = () => {
    return (
        <section className={stylesDetalles.section}>
            <img src="/img/alt-logo.svg" alt="Logo de Lovestar" />
            <h2>Entrega</h2>
            <h2>Pago</h2>
        </section>
    )
}

export default Detalles;