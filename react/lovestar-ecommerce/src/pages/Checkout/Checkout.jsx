import stylesCheckout from "./checkout.module.css";

import Productos from "../../components/Checkout/Productos/Productos";
import Detalles from "../../components/Checkout/Detalles/Detalles";

function Checkout() {
    return (
        <main className={stylesCheckout.main}>
            <Detalles />
            <Productos />
        </main>
    );
}

export default Checkout;