const URL = "https://jsonplaceholder.typicode.com/posts";

// PRIMERA FORMA DE PROMESAS:

async function promesaAsyncAwait() {
    try {
        console.log("DENTRO DEL ASYNC AWAIT");
        const response = await fetch(URL);
        const datosJSON = await response.json();
        console.log(datosJSON);
    } catch (error) {
        console.log("SUPER ERROR: ", error);
    }
}

function promesaFetch() {
    fetch(URL)
        .then((datos) => datos.json())
        .then((resultado) => console.log(resultado))
        .catch((error) => console.log("SUPER ERROR: ", error)
        )
}

promesaFetch();