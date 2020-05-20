var bd_conection = require("./repositorio/connection");

class controller {
  constructor() {}

  validarLogin(peticion, respuesta) {
    var correo = peticion.body.correo;
    var pass = peticion.body.pass;
    var userQuery =
      "SELECT * FROM Cine.Usuario WHERE correo = '" +
      correo +
      "' AND pass = '" +
      pass +
      "'";
    console.log(userQuery);

    bd_conection.query(userQuery, function (error, resultado) {
      if (error) {
        console.log("Error: " + error);
        respuesta.writeHead(500);
        respuesta.end();
      } else {
        if (resultado != "") {
          var userId = resultado[0].id;
          //respuesta.writeHead(200, {'Set-Cookie': 'id='+ userId});
          respuesta.cookie("id", userId);
          respuesta.writeHead(200);
          respuesta.end();
          console.log("Resultado: " + resultado[0].id);
        } else {
          respuesta.writeHead(401);
          respuesta.end();
          console.log("Resultado vacio");
        }
      }
    });
  }

  getTarjeta(id) {
    return new Promise(function (resolve, reject) {
      var userQuery = "SELECT id, nombre, apellidos, correo, puntos FROM Cine.Usuario WHERE id = " + id;

      bd_conection.query(userQuery, function (error, resultado) {
        if (error) {
          console.log("Error: " + error);
          reject("Error");
        } else {
          if (resultado != "") {
            console.log('Resolve: ');
            resolve(resultado[0]);
          } else {
            console.log('Reject: ');
            reject(undefined);
          }
        }
      });
    });
  }
}

var controlador = new controller();

module.exports = controlador;
