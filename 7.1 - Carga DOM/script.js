// CARGA EN MEMORIA MIS NODOS HTML.

/**
 * Declarar las const fuera para usarlas más adelante. 
 */
/* function cargaMemoria() {
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const p1 = document.querySelector("#p1");
    const p2 = document.querySelector("#p2");
    // Imprimo los nodos HTML
    console.log(btn1, btn2, p1, p2);
}

// Referencia a función
document.addEventListener("DOMContentLoaded", cargaMemoria)

let btn1, btn2, p1, p2
// Arrow Function
document.addEventListener("DOMContentLoaded", () => {
    btn1 = document.querySelector("#btn1");
    btn2 = document.querySelector("#btn2");
    p1 = document.querySelector("#p1");
    p2 = document.querySelector("#p2");
    // Imprimo los nodos HTML
    console.log(btn1, btn2, p1, p2);
})

btn1.addEventListener("click", () => {
    console.log("Hola");
    p1.textContext = "párrafo 1"
});
btn2.addEventListener("click2", () => {
    p2.textContext = "párrafo 2"
});
*/

// OTRA FORMA DE HACERLO


document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const p1 = document.querySelector("#p1");
    const p2 = document.querySelector("#p2");

    btn1.addEventListener("click", () => {
        p1.textContent = "párrafo 1"
    });

    btn2.addEventListener("click", () => {
        setTimeout(() => console.log("hola"), 300);        
    });
});

/* Puedo hacer esto debido al 'Hoisting' ya que carga las
funciones en memoria en la fase de compilación */
/*     imprimirButton();
    function imprimirButton() {
        console.log(btn1, btn2, p1, p2);
    } */

/* Si lo hago con un arrow function no puedo invocarlo antes, ya que no es una funcion */
/*     const imprimirButton2 = () => {
        console.log(btn1, btn2, p1, p2);
    }
 
    imprimirButton2(); */

