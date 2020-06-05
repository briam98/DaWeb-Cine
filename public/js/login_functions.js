var peticion_http = null;

function crea_query_string() {
    var correo = document.getElementById("correo");
    var pass = document.getElementById("pass");
    return "correo=" + encodeURIComponent(correo.value) +
        "&pass=" + encodeURIComponent(pass.value);
}

function login() {
    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = procesaRespuesta;
        peticion_http.open("POST", "http://localhost:3000/validarLogin", true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var query_string = crea_query_string();
        peticion_http.send(query_string);
    }
}
function procesaRespuesta() {
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {
            window.location.replace("http://localhost:3000");
        } else {
            if (peticion_http.status == 401) {
                alert("Correo o contraseña incorrecto")
            } else {
                alert("Error interno, intentelo de nuevo.")
            }
        }
    }
}