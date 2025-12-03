import stylesPedidos from "./pedidos.module.css";

import Card from "../../components/Cards/Card-Pedidos/Card-Pedidos";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/ContextUser";

import { getPedidosByUser } from "../../utils/querys";

function Pedidos() {
  const { currentUser } = useContext(UserContext);

  const [pedidosUsuario, setPedidosUsuario] = useState(null);

  useEffect(() => {
    if (currentUser) {

      const getPedidos = async () => {
        const pedidos = await getPedidosByUser(currentUser.uid)
        
        setPedidosUsuario(pedidos);
      }

      getPedidos();
    };
  }, [currentUser])

  console.log(pedidosUsuario);



  return (
    <section className={stylesPedidos.main}>
      <h1>Pedidos</h1>
      <div className={stylesPedidos.form}>
        {(pedidosUsuario === null) || (pedidosUsuario === 0) ? (
          <div className={stylesPedidos.noPedidos}>
            <div className={stylesPedidos.info}>
              <p className={stylesPedidos.titulo}>No hay pedidos aún.</p>
              <p className={stylesPedidos.texto}>Explora nuestra tienda y encuentra algo especial.</p>
            </div>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Pedido</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {pedidosUsuario.map((pedido, index) => (<tr>
                {console.log(pedido)}
                <Card key={index} idPedido={pedido.id} total={pedido.total} fecha={pedido.fecha} estado={pedido.estado} url={pedido.items[0].url} items={pedido.items.length}/>
              </tr>))}
            </tbody>
          </table>
        )}

      </div>
    </section>
  );
}

export default Pedidos;
