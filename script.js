function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (user === "admin" && pass === "1234") {
        window.location.href = "encuesta.html";
    } else {
        document.getElementById("error").innerText = "Usuario o contraseña incorrectos";
    }
}


function guardarRespuestas() {
    let estado = document.getElementById("estado").value;
    let presupuesto = document.getElementById("presupuesto").value;
    let tiempo = document.getElementById("tiempo").value;
    let color = document.getElementById("color").value;

    // Guardar los valores en localStorage
    localStorage.setItem("estado", estado);
    localStorage.setItem("presupuesto", presupuesto);
    localStorage.setItem("tiempo", tiempo);
    localStorage.setItem("color", color);

    // Redirigir a la página de resultados
    window.location.href = "resultados.html";
}

window.onload = function () {
    if (window.location.pathname.includes("resultados.html")) {
        document.getElementById("resultado").innerHTML = `🍽️ <b>Te recomendamos:</b> ${localStorage.getItem("resultado")}`;
    }
	
};
