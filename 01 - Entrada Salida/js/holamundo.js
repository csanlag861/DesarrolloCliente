function holaMundo() {
    alert("Hola Mundo");
}

function manipularDOM() {
    const nombre = prompt("¿Cuál es tu nombre?");
    document.querySelector('div').innerHTML = `¡Hola!, ${nombre}`;
}