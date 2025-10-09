console.log("Guardando claves en LocalStorage");

localStorage.setItem("Nombre", "Juan");

const producto = {
    nombre: "Monitor de 24 pulgadas",
    precio: 300,
};

const productoString = JSON.stringify(producto);
localStorage.setItem("Producto", productoString);

const meses = ["Enero", "Febrero", "Marzo", "Abril"];
localStorage.setItem("Meses", JSON.stringify(meses));
