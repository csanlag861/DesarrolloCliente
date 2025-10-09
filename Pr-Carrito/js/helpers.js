// Función para sacar los datos del curso desde la tarjeta (card)
function obtenerDatosCurso(card) {
    return {
        imagen: card.querySelector(".imagen-curso").src, // cojo la imagen
        nombre: card.querySelector("h4").textContent, // cojo el nombre del curso
        precio: card.querySelector(".precio span").textContent, // cojo el precio
        id: card.querySelector("a").getAttribute("data-id"), // cojo el id del curso
        cantidad: 1 // por defecto siempre empieza con 1
    }
}

// Comprueba si el curso ya está en el carrito
function hayCursoEnCarrito(cursos, id) {
    return cursos.some((curso) => curso.id === id);
}

// Guarda los cursos en el localStorage
function addLocalStorage(item) { localStorage.setItem("Cursos", JSON.stringify(item)) }

// Busca un curso dentro del array por su id y devuelve el índice
function buscarCursoPorID(cursos, id) {
    return cursos.findIndex((curso) => curso.id === id);
}

// Borra todo el HTML de un contenedor
function borrarHTML(contenedor) { return contenedor.innerHTML = ""; }

// Devuelve un curso del localStorage por su id
function getCursoLocalStorage(cursos, id) {
    return cursos.find((curso) => curso.id === id);
}

// Muestra un pequeño aviso cuando se vacía el carrito
function mostrarDialog() {
    const dialog = document.createElement("dialog");
    dialog.textContent = "El carrito ha sido vaciado.";
    document.body.appendChild(dialog);

    dialog.showModal();
    setTimeout(() => { dialog.close(); dialog.remove() }, 1000);
    clearTimeout();
}

// Borra una fila del carrito al hacer clic en el botón de eliminar
function borrarHTMLCarrito(evento) {
    const elementoCurso = evento.target.closest("tr");
    borrarHTML(elementoCurso);
}

// Saca los cursos del localStorage (si hay)
function getLocalStorage() {
    const cursos = localStorage.getItem("Cursos")

    if (cursos) {
        return JSON.parse(cursos) // si hay, los paso a objeto
    } else {
        return [] // si no hay, devuelvo un array vacío
    }
}

// Actualiza la cantidad del curso si ya está en el carrito
function actualizarHTML2(card, contenedorCarrito) {
    const idImagen = card;
    //console.log("ID IMAGEN: ", idImagen);

    const cursosCarrito = contenedorCarrito.querySelectorAll("tr");
    //console.log("ID CURSOS: ", cursosCarrito);

    cursosCarrito.forEach((curso) => {
        if (curso.querySelector("a").getAttribute("data-id") === idImagen) {
            const cantidadCursos = curso.querySelector("#cantidad").textContent;
            const numeroCurso = Number(cantidadCursos);
            const numeroActualizado = numeroCurso + 1;
            curso.querySelector("#cantidad").innerHTML = `${numeroActualizado}`;
        }
    })
}

export { actualizarHTML2, obtenerDatosCurso, hayCursoEnCarrito, addLocalStorage, buscarCursoPorID, borrarHTML, getCursoLocalStorage, mostrarDialog, borrarHTMLCarrito, getLocalStorage };
