import { useEffect, useState, useContext } from "react";
import { collection, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import { db } from "../../utils/firebase";

import stylesTienda from "./tienda.module.css";
import Card from "../../components/Cards/Card-Shop/Card";

import { DotLoader } from "react-spinners"

import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

import { UserContext } from "../../context/ContextUser";

function Tienda() {
  const { currentUser } = useContext(UserContext);

  const [productos, setProductos] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showCategorias, setShowCategorias] = useState(false);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [bandera, setBandera] = useState(true);

  const [categoria, setCategoria] = useState("TODO");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const snapshot = await getDocs(productsRef);

        const dataProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setIsLoading(false);
        setBandera(false);
        setProductos(dataProducts);
      } catch (error) {
        toast.error("Error al obtener productos");
        console.error("Error al obtener productos", error);
      }
    };
    getProducts();
  }, []);



  useEffect(() => {
    const cargarProductos = async () => {

      if (categoria === "TODO") {
        try {
          const productsRef = collection(db, "products");
          const snapshot = await getDocs(productsRef);
          const dataProducts = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          setIsLoading(false);
          setProductos(dataProducts);
        } catch (error) {
          console.error("Error al cargar los productos", error);
          toast.error("Error al cargar los productos.");
        }

      } else {
        try {
          const productsRef = collection(db, "products");
          const q = query(productsRef, where("categoria", "==", categoria));
          const snapshot = await getDocs(q);
          const dataProducts = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));

          setIsLoading(false);
          setProductos(dataProducts);
        } catch (error) {
          console.error("Error al cargar los productos", error);
          toast.error("Error al cargar los productos.");
        }
      }
    }

    cargarProductos();
  }, [categoria])



  useEffect(() => {
    isLoading && (toast.success("Cargando productos"))
  }, [isLoading])

  const handleSearch = () => setShowSearch(!showSearch);

  const handleCategoria = () => setShowCategorias(!showCategorias);

  const filterProducts = productos.filter(
    (prod) =>
      (!prod.membership || (currentUser?.rol === "miembro" || currentUser?.rol === "admin")) &&
      prod.nombre?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    bandera ? <DotLoader size={50} color="#E6293F" /> : (<>
      <div className={stylesTienda.filtros}>
        <Icon icon="proicons:filter" onClick={handleCategoria} />
        <Icon icon="material-symbols:search" onClick={handleSearch} />
      </div>
      {showCategorias && (<div className={stylesTienda.categorias}>
        <p onClick={() => setCategoria("TODO")}>TODO</p>
        <p onClick={() => setCategoria("Camisetas")}>Camisetas</p>
        <p onClick={() => setCategoria("Sudaderas")}>Sudaderas</p>
        <p onClick={() => setCategoria("Jerseys")}>Jerseys</p>
        <p onClick={() => setCategoria("Pantalones")}>Pantalones</p>
        <p onClick={() => setCategoria("Gorros")}>Gorros</p>
      </div>)}

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
    </>)

  );
}

export default Tienda;
