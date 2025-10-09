//CARGA DOM
const containerDestino = document.querySelector("section.destinos .contenedor-cards");

//CASO 0 - CARDS DE DESTINO POPULARES - LECTURA DE ATRIBUTOS
//vas a leer el id y el img-id de la primera imagen de la primera card de destinos populares
console.log(containerDestino.children[0].children[0].id);
console.log(containerDestino.children[0].children[0].getAttribute("img-id"));

/* OTRA FORMA DE HACERLO */
console.log(containerDestino.querySelector(".card .imagen").id)

/* QUERY SELECTOR ALL */
console.log(containerDestino.querySelectorAll(".card .imagen")[0].id)

//CASO 1 - CARDS DE DESTINO POPULARES - EVENTO EN LA IMAGEN CON DELEGACIÓN DE EVENTOS
//vas a poner un evento en las imágenes de las cards de destinos populares
//de tal forma que cada vez que se haga un click en las imágenes, que muestre su url
containerDestino.addEventListener("click", (evento) => {
    console.log(evento.target);
    console.log(evento.type);
    console.log(evento.bubbles);

    if (evento.target.classList.contains("imagen")) {
        console.log("Has clickado en una imagen");
        console.log(evento.target.src);

    } else {
        console.log("No has clickado en una imagen");
    }
    /* CASO 2 */
    if (evento.target.classList.contains("titulo")) {
        console.log(evento.target.textContent);
        console.log(evento.target.closest(".card"));
    }
});


//CASO 2 CARDS DE DESTINO - EVENTO EN EL PARRAFO TITULO
//Vas a poner un evento en los títulos de las cards de destinos
//de tal forma que cada vez que haga un click en el título, pues que muestre el titulo y todo el componente html

//CASO 3 CARDS DE QUE HACER EN NY - EVENTO ENE EL PARRAFO TITULO
//Vas a poner un evento en los títulos de los cards de que hacer en queHacerNY
//de tal forma que cada vez que se haga un click en el título, ha de mostrar el titulo y  todo el componente HTML

const contenedorNY = document.querySelectorAll("section.hacer .contenedor-cards")[2];
contenedorNY.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("titulo")) {
        console.log(evento.target.textContent);
        console.log(evento.target.closest(".card"));
    }
})

//CASO 4 TRAVERSING THE DOM - HOSPEDAJE
const contenedorHijoHospedaje = document.querySelectorAll("section.hospedaje .contenedor-cards .card");
const contenedorHospedaje = document.querySelector("section.hospedaje .contenedor-cards");
console.log(contenedorHospedaje);

contenedorHijoHospedaje.forEach(element => {
    console.log(element)
    console.log(element.textContent);
    const nodeImg = element.querySelector("img");
    console.log(nodeImg.src);
    // console.log(Array.from(element.children)[0]);
    // console.log(element.children[0].src)
});





//CASO 5- BORRADO EFICIENTE DE UN SUBÁRBOL
//Borra de forma eficiente todos los divs contenidos en la sección de que hacer en NY

//CASO 6 - CUANDO PULSE EN EL PRECIO DE HOSPEDAJE PUES QUE SAQUE:
//LA URL DE LA IMAGEN DE SU CONTENEDOR
//EL NOMBRE DEL CONTENEDOR PADRE
