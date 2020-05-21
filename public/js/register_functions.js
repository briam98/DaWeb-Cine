function validate() {
    var nombre = document.getElementById("nombre");
    if (!nombre) {
        return false;
    }

    var apellidos = document.getElementById("apellidos");
    if (!apellidos) {
        return false;
    }

    var correo = document.getElementById("correo");
    if (!correo) {
        return false;
    }

    var pass1 = document.getElementById("pass1");
    if (!pass1) {
        return false;
    }

    var pass2 = document.getElementById("pass2");
    if (!pass2) {
        return false;
    }

    if (pass1.value != pass2.value) {
        pass2.setCustomValidity("Las contraseñas no coinciden");
        return false;
    }

    register();
}

var peticion_http = null

function crea_query_string() {
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var correo = document.getElementById("correo");
    var pass1 = document.getElementById("pass1");

    return "nombre=" + encodeURIComponent(nombre.value) +
         "&apellidos=" + encodeURIComponent(apellidos.value) +
        "&correo=" + encodeURIComponent(correo.value) +
        "&pass1=" + encodeURIComponent(pass1.value);
}

function register() {
    peticion_http = new XMLHttpRequest();
    if (peticion_http) {
        peticion_http.onreadystatechange = procesaRespuesta;
        peticion_http.open("POST", "http://localhost:3000/register", true);
        peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var query_string = crea_query_string();
        peticion_http.send(query_string);
    }
}
function procesaRespuesta() {
    if (peticion_http.readyState == 4) {
        if (peticion_http.status == 200) {
            alert("peticion correcta");
            // Simulate an HTTP redirect:
            window.location.replace("http://localhost:3000/login");
        } else {
            if (peticion_http.status == 401) {
                alert("Correo o contraseña incorrecto")
            } else {
                alert("Error interno, intentelo de nuevo.")
            }
        }
    }
}