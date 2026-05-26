async function guardarRespuestas() {
    let estado = document.getElementById("estado").value;
    let presupuesto = document.getElementById("presupuesto").value;
    let tiempo = document.getElementById("tiempo").value;
    let color = document.getElementById("color").value;
    let userId = 1; // Esto debería venir de la sesión

    let response = await fetch("http://localhost:8080/encuesta/guardar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            usuario: { id: userId },
            estado: estado,
            presupuesto: presupuesto,
            tiempo: tiempo,
            color: color
        })
    });

    if (response.ok) {
        window.location.href = "resultados.html";
    }
}

