function validate() {
    
    var nombre = document.getElementById("nombre").value;
    if (!nombre) {
        return false;
    }

    var apellidos = document.getElementById("apellidos").value;
    if (!apellidos) {
        return false;
    }

    var correo = document.getElementById("correo").value;
    if (!correo) {
        return false;
    }

    var pass1 = document.getElementById("pass1");
    if (!pass1.value) {
        return false;
    }

    var pass2 = document.getElementById("pass2");
    if (!pass2.value) {
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
            window.location.replace("http://localhost:3000/login");
        } else {
            alert("Fallo al intentar registrarse. Por favor intentalo de nuevo.")
        }
    }
}