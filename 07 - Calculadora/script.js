let numero1, numero2, botonSuma, botonPotencia;

function cargarDOM() {
    numero1 = document.querySelector('#op1');
    numero2 = document.querySelector('#op2');
    botonSuma = document.querySelector('#suma');
    botonPotencia = document.querySelector('#potencia');
    resultado = document.querySelector('#resultado');
    botonSuma.addEventListener("click", suma);
    botonPotencia.addEventListener("click", potencia);
}
document.addEventListener("DOMContentLoaded", cargarDOM);


function suma() {
   resultado.textContent = +numero1.value+ +numero2.value;
}
function potencia() {    
    console.log("AAA");
    resultado.textContent = Math.pow(+numero1.value, +numero2.value);
}