console.log("Borrando claves de LocalStorage");

localStorage.removeItem("Nombre");

// Para actualizar el array de meses:
const mesesArray = JSON.parse(localStorage.getItem("Meses"));
mesesArray.push("Diciembre");
localStorage.setItem("Meses", JSON.stringify(mesesArray));