function comprobarLogin() {
    if (getCookie('id') != "") {

        if (document.getElementById('linkLogin') != undefined) {
            document.getElementById('linkLogin').style.display = 'none';
        }
        
        if (document.getElementById('linkRegistro') != undefined) {
            document.getElementById('linkRegistro').style.display = 'none';
        }
        
        document.getElementById('linkCerrarSesion').style.display = 'inline-block';
    }
}

comprobarLogin();


function cerrarSesion() {
    alert("Vas a cerrar la sesión actual");
   document.cookie = "id=";

   document.getElementById("linkLogin").style.display = "inline-block";
   document.getElementById("linkRegistro").style.display = "inline-block";
   document.getElementById("linkCerrarSesion").style.display = "none";

}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }