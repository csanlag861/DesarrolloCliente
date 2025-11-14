import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

import stylesTienda from "./tienda.module.css";
import Card from "../../components/Cards/Card-Shop/Card";

import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

import { UserContext } from "../../context/ContextUser";

function Tienda() {
  const { currentUser } = useContext(UserContext);

  const [productos, setProductos] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const snapshot = await getDocs(productsRef);

        // ?¿¿?
        const dataProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(dataProducts);
        setIsLoading(false);
        setProductos(dataProducts);
      } catch (error) {
        toast.error("Error al obtener productos");
        console.error("Error al obtener productos", error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    isLoading && toast.success("Cargando productos")
  }, [isLoading])

  const handleSearch = () => setShowSearch(!showSearch);

  // AQUI TENGO LOS VALORES RECIENTES O TENGO QUE HACER UN PREVIOUS?
  const filterProducts = productos.filter(
    (prod) =>
      (!prod.membership || (currentUser?.rol === "miembro" || currentUser?.rol === "admin")) &&
      prod.nombre?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={stylesTienda.filtros}>
        <p>TODO</p>
        <p>Camisetas</p>
        <p>Sudaderas</p>
        <p>Chaquetas</p>
        <p>Pantalones</p>
        <p>Gorros</p>
        <Icon icon="proicons:filter" />
        <Icon icon="material-symbols:search" onClick={handleSearch} />
      </div>
      <div className={stylesTienda.buscador}>
        {showSearch && (
          <div
            className={`${stylesTienda.search} ${!showSearch ? stylesTienda.hidden : ""
              }`}
          >
            <input
              type="text"
              placeholder="Buscar ropa..."
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
            />
          </div>
        )}
      </div>
      <section className={stylesTienda.cards}>
        {(filterProducts.length > 0 ? (
          filterProducts.map((prod, id) => <Card key={id} card={prod} />)
        ) : (
          <div className={stylesTienda.noProducts}>
            <Icon icon="material-symbols:error" />
            <p>No hay productos para mostrar.</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Tienda;
