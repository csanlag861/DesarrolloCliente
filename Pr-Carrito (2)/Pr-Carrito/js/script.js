import * as utilities from "./helpers.js"

let btnAgregar, btnVaciar, contenedorCarrito, cantidadProductos

// Carga del DOM
document.addEventListener("DOMContentLoaded", cargarMemoria)

function cargarMemoria() {
    btnAgregar = document.querySelector("#lista-cursos")
    btnVaciar = document.querySelector("#vaciar-carrito")
    contenedorCarrito = document.querySelector("#lista-carrito tbody")
    cantidadProductos = document.querySelector("#cantidadDeProductos");
    const nombreArchivo = window.location.pathname.split("/").pop();

    if (nombreArchivo === "dinamico.html") {
        const cursos = obtenerCartasDinamicas();
        activarBuscador(cursos);
        renderizarCartas(cursos);
    }

    btnAgregar.addEventListener("click", (evento) => eventoCarrito(evento));
    btnVaciar.addEventListener("click", vaciarCarrito)

    pintarCarrito();
}


function eventoCarrito(evento) {
    if (evento.target.classList.contains("agregar-carrito")) {
        const card = evento.target.closest(".card")

        const infoCard = utilities.obtenerDatosCurso(card);
        const cursos = utilities.getLocalStorage();
        const id = card.querySelector("a").getAttribute("data-id");

        if (utilities.hayCursoEnCarrito(cursos, id)) {
            actualizarHTML(id)
            actualizarCantidadLocalStorage(cursos, id);
            pintarCantidadDeProductos(calcularCantidadDeProductos());
            pintarTotal(calcularTotal());
        } else {
            agregarCarrito(infoCard)
        }
    }
}

function agregarCarrito(infoCard) {
    pintarHTML(infoCard)
    pintarCantidadDeProductos(calcularCantidadDeProductos());
    agregarCarritoLocalStorage(infoCard)
    pintarTotal(calcularTotal());
}

function agregarCarritoLocalStorage(infoCard) {
    const listaCursosLS = JSON.parse(localStorage.getItem("Cursos"));
    if (!listaCursosLS) {
        utilities.addLocalStorage([infoCard]);
    }
    else {
        listaCursosLS.push(infoCard)
        utilities.addLocalStorage(listaCursosLS)
    }
}

function actualizarCantidadLocalStorage(cursos, id) {
    const cursosLocalStorage = cursos;
    const cursoID = utilities.getCursoLocalStorage(cursos, id);
    cursoID.cantidad++;
    utilities.addLocalStorage(cursosLocalStorage);
}

function actualizarHTML(card) {
    const idImagen = card;
    const cursosCarrito = contenedorCarrito.querySelectorAll("tr");
    cursosCarrito.forEach((curso) => {
        if (curso.querySelector("a").getAttribute("data-id") === idImagen) {
            const cantidadCursos = curso.querySelector("#cantidad").textContent;
            const numeroCurso = Number(cantidadCursos);
            const numeroActualizado = numeroCurso + 1;
            curso.querySelector("#cantidad").innerHTML = `${numeroActualizado}`;
        }
    })
}

function pintarCarrito() {
    const productosCarritos = utilities.getLocalStorage();
    if (productosCarritos) {
        productosCarritos.forEach(element => {
            pintarHTML(element);
        });
        pintarTotal(calcularTotal());
        pintarCantidadDeProductos(calcularCantidadDeProductos());
        const btnBorrar = document.querySelector("tbody")
        btnBorrar.addEventListener("click", (evento) => deleteLocalStorage(evento))
    }
}

function pintarHTML(contenedor) {
    return contenedorCarrito.innerHTML += `<tr><td><img src="${contenedor.imagen}"></img></td><td>${contenedor.nombre}</td><td id=precio>${contenedor.precio}</td><td id=cantidad>${contenedor.cantidad}</td><td><a href=# class="borrar-curso" data-id=${contenedor.id}>X</a></td></tr>`
}

function deleteLocalStorage(evento) {
    const cursos = utilities.getLocalStorage()
    let id = 0;
    const cantidadCursos = evento.target.closest("tr").querySelector("#cantidad");
    const cantidadNumber = Number(cantidadCursos.textContent);
    if (evento.target.classList.contains("borrar-curso")) {
        id = evento.target.closest("tr").querySelector("a").getAttribute("data-id")

        if (cantidadNumber > 1) {
            const cursoID = utilities.getCursoLocalStorage(cursos, id);
            cursoID.cantidad--;
            utilities.addLocalStorage(cursos);
            const cantidadActualizado = cantidadNumber - 1;
            cantidadCursos.innerHTML = `${cantidadActualizado}`;
        } else {
            cursos.splice(utilities.buscarCursoPorID(cursos, id), 1);
            utilities.borrarHTMLCarrito(evento);
            utilities.addLocalStorage(cursos);
        }
        pintarTotal(calcularTotal());
        pintarCantidadDeProductos(calcularCantidadDeProductos());
    }
}

function calcularTotal() {
    const productosLocalStorage = utilities.getLocalStorage();

    const totalCarrito = productosLocalStorage.reduce((total, producto) => {
        return total + (Number(producto.precio.slice(1)) * Number(producto.cantidad));
    }, 0);

    return totalCarrito;
}

function pintarTotal(total) {
    const tfoot = contenedorCarrito.closest("table").querySelector("tfoot");
    const totalFoot = tfoot.querySelector("td");
    totalFoot.textContent = `Total: ${total}€`;
}

function calcularCantidadDeProductos() {
    const productosCarritos = contenedorCarrito.querySelectorAll("tr");
    let cantidad = 0;
    productosCarritos.forEach((curso) => {
        const cantidadQuery = curso.querySelector("#cantidad");
        if (cantidadQuery !== null) {
            cantidad += Number(cantidadQuery.textContent);
        }
    })
    return cantidad;
}

function pintarCantidadDeProductos(cantidad) {
    cantidadProductos.querySelector("p").textContent = cantidad;
}

function vaciarCarrito() {
    utilities.borrarHTML(contenedorCarrito);
    localStorage.clear()
    pintarTotal(calcularTotal());
    pintarCantidadDeProductos(calcularCantidadDeProductos());
    utilities.mostrarDialog("El carrito ha sido vaciado");
}

async function obtenerCartasDinamicas() {
    const datos = '../data/data.json';
    try {
        const respuesta = await fetch(datos)
        const cursos = await respuesta.json()
        return cursos;
    } catch (error) {
        console.error("Error al cargar cursos desde JSON:", error)
        utilities.mostrarDialog("Error al cargar las cards dinámicas");
    }
}

async function renderizarCartas(cursos) {
    btnAgregar.innerHTML = `<h1 id="encabezado" class="encabezado">Cursos En Línea</h1>`;

    let fila;
    const cursosAwait = await cursos;
    cursosAwait.forEach((curso, index) => {
        // Crear una nueva fila cada 3 cursos
        if (index % 3 === 0) {
            fila = document.createElement("div");
            fila.classList.add("row");
            btnAgregar.appendChild(fila);
        }

        const columna = document.createElement("div");
        columna.classList.add("four", "columns");

        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
                <img src="${curso.imagen}" class="imagen-curso u-full-width" />
                <div class="info-card">
                <h4>${curso.titulo}</h4>
                <p>${curso.autor}</p>
                <img src="img/estrellas.png" />
                <p class="precio">${curso.precio_original} <span class="u-pull-right">${curso.precio_descuento}</span></p>
                <a class="u-full-width button-primary button input agregar-carrito" data-id="${curso.id}">Agregar Al Carrito</a>
                </div>
            `;

        columna.appendChild(card);
        fila.appendChild(columna);
    });
}

async function activarBuscador(cursos) {
    const formulario = document.querySelector("#busqueda");
    const input = document.querySelector("#buscador");
    const cursosAwait = await cursos;

    formulario.addEventListener("submit", (e) => e.preventDefault());
    
    input.addEventListener("input", (evento) => {
        const texto = evento.target.value.toLowerCase().trim();

        // Filtramos los cursos según el texto escrito
        const cursosFiltrados = cursosAwait.filter(curso =>
            curso.titulo.toLowerCase().includes(texto) ||
            curso.autor.toLowerCase().includes(texto)
        );

        renderizarCartas(cursosFiltrados);
    });
}

