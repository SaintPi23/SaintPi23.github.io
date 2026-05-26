import { guardarToken } from "./guardarRespuestas.js"; // Si estás usando módulos

function loginUsuario() {
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    fetch("URL_DEL_BACKEND/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            guardarToken(data.token);  // Almacenar el token en localStorage
            window.location.href = "encuesta.html"; // Redirigir al usuario
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    })
    .catch(error => console.error("Error en el login", error));
}

