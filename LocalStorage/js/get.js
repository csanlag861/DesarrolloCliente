console.log("Leyendo claves de LocalStorage");

const nombre = localStorage.getItem("Nombre");
console.log(nombre);

const productoJSON = localStorage.getItem("Producto");
console.log(JSON.parse(productoJSON));

console.log(JSON.parse(localStorage.getItem("Meses")));


