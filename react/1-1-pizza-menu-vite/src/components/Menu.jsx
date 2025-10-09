import Pizza from "./Pizza"

const Menu = () => {
    return (
        <main className="menu">
            <h2>Menú Pizza</h2>
            <div className="pizzas">
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
                <Pizza />
            </div>
        </main>
    );
}

export default Menu;