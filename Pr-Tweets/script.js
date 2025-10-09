// Cargamos el DOM
document.addEventListener("DOMContentLoaded", () => {
    // Obtenemos los nodos necesarios
    const tweet = document.querySelector(".textarea");
    const listaTweets = document.querySelector("#lista-tweets");
    const botonAgregar = document.querySelector(".btn--submit");
    const botonReset = document.querySelector(".btn--reset");

    const tweetsGuardados = JSON.parse(localStorage.getItem("Tweets"));
    if (tweetsGuardados) {
        // Cargamos los tweets que hay en LocalStorage:
        tweetsGuardados.forEach(tweet => {
            añadirTweetAlista(tweet, listaTweets);
        });
    }

    // Añadimos el evento al botón de agregar:
    botonAgregar.addEventListener("click", () => {
        // Añadir tweets a la lista:
        añadirTweetAlista(tweet.value, listaTweets);
        añadirTweetsLocalStorage(tweet.value);
    })

    // Añadimos el evento al botón de resetear:
    botonReset.addEventListener("click", () => {
        resetTweet(listaTweets);
    })
})

function añadirTweetAlista(tweet, listaTweets) {
    // Creamos un nodo Li:
    const li = document.createElement("li");
    li.innerText = tweet;

    // Creo el botón de borrar
    const botonBorrar = document.createElement("button")
    botonBorrar.textContent = "X";
    botonBorrar.classList.add = "borrar-tweet";
    // Pintamos el nodo Li con el tweet:
    listaTweets.appendChild(li);
    listaTweets.appendChild(botonBorrar);
}

function añadirTweetsLocalStorage(tweet) {
    // Cargamos los tweets:
    let tweetsLocalStorage = JSON.parse(localStorage.getItem("Tweets"));
    // Si no hay tweets guardados:
    if (!tweetsLocalStorage) {
        localStorage.setItem("Tweets", JSON.stringify([tweet]));
    } else {
        tweetsLocalStorage.push(tweet);
        localStorage.setItem("Tweets", JSON.stringify(tweetsLocalStorage));
    }
}

function resetTweet(listaTweets) {
    const li = document.querySelectorAll("li");
    li.forEach(tweet => {
        listaTweets.removeChild(tweet);
    })
    localStorage.clear();
}