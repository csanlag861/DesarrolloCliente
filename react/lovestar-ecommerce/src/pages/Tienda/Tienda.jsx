import stylesTienda from "./tienda.module.css";
import Card from "../../components/Cards/Card-Shop/Card";
import productos from "../../data/productos.js" 

function Tienda() {

    return (
        <main>
            <div className={stylesTienda.filtros}>
                <p>TODO</p>
                <p>Camisetas</p>
                <p>Sudaderas</p>
                <p>Chaquetas</p>
                <p>Pantalones</p>
                <p>Gorros</p>
            </div>
            <section className={stylesTienda.cards}>
                {productos.map((prod) => (
                    <Card key={prod.id} card={prod} />
                ))}
            </section>
        </main>
    );
}

export default Tienda;