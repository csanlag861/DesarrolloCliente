import Pizza from "./Pizza"
import pizzaData from "../data/data.js";

const Menu = () => {
/*     const objetoPizza = {
        url: "pizzas/focaccia.jpg",
        name: "focaccia",
        ingredientes: "Tomate, ...,",
    }; */
    return (
        <main className="menu">
            <h2>Menú Pizza</h2>
            <div className="pizzas">
                {pizzaData.map((itemPizza) => (
                    <Pizza pizza={itemPizza}/>
                ))}
            </div>
        </main>
    );
}

export default Menu;