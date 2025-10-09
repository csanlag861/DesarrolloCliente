function obtenerDatosCurso(card) {
    return {
        imagen: card.querySelector(".imagen-curso").src,
        nombre: card.querySelector("h4").textContent,
        precio: card.querySelector(".precio span").textContent,
        id: card.querySelector("a").getAttribute("data-id"),
        cantidad: 1 
    }
}

function hayCursoEnCarrito(cursos, id) {
    return cursos.some((curso) => curso.id === id);
}

function addLocalStorage(item) { localStorage.setItem("Cursos", JSON.stringify(item)) }

function buscarCursoPorID(cursos, id) {
    return cursos.findIndex((curso) => curso.id === id);
}

function borrarHTML(contenedor) { return contenedor.innerHTML = ""; }

function getCursoLocalStorage(cursos, id) {
    return cursos.find((curso) => curso.id === id);
}

function mostrarDialog(mensaje) {
    const dialog = document.createElement("dialog");
    dialog.textContent = `${mensaje}`;
    document.body.appendChild(dialog);
    
    dialog.showModal();
    setTimeout(() => { dialog.close(); dialog.remove() }, 1000);
    clearTimeout();
}

function borrarHTMLCarrito(evento) {
    const elementoCurso = evento.target.closest("tr");
    borrarHTML(elementoCurso);
}

function getLocalStorage() {
    const cursos = localStorage.getItem("Cursos")

    if (cursos) {
        return JSON.parse(cursos)
    } else {
        return []
    }
}

export { obtenerDatosCurso, hayCursoEnCarrito, addLocalStorage, buscarCursoPorID, borrarHTML, getCursoLocalStorage, mostrarDialog, borrarHTMLCarrito, getLocalStorage };
