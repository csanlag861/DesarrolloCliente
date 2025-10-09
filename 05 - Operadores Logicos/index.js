

function textoEdad() {
    let edad = document.querySelector("#edad").value;
    let respuesta1 = document.querySelector("#respuesta1");
    let respuesta2 = document.querySelector("#respuesta2");
    let respuesta3 = document.querySelector("#respuesta3");
    if (edad < 18) {
        respuesta1.textContent = "No puedes beber alcohol";
        respuesta2.textContent = "No puedes asistir a la fiesta.";
        respuesta3.textContent = "No tienes entrada gratuita.";
    }
    else if (edad >= 20 && edad <= 25) {
        respuesta1.textContent = "Puedes beber alcohol";
        respuesta2.textContent = "Puedes asistir a la fiesta.";
        respuesta3.textContent = "No tienes entrada gratuita.";
    } else if (edad >= 18 && edad <= 30) {
        respuesta1.textContent = "Puedes beber alcohol";
        respuesta2.textContent = "Puedes asistir a la fiesta.";
        respuesta3.textContent = "Tienes entrada gratuita.";
    }
}