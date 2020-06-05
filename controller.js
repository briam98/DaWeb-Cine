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

    bd_conection.query(userQuery, function (error, resultado) {
      if (error) {
        respuesta.writeHead(500);
        respuesta.end();
      } else {
        if (resultado != "") {
          var userId = resultado[0].id;
          //respuesta.writeHead(200, {'Set-Cookie': 'id='+ userId});
          respuesta.cookie("id", userId);
          respuesta.writeHead(200);
          respuesta.end();
        } else {
          respuesta.writeHead(401);
          respuesta.end();
        }
      }
    });
  }

  getTarjeta(id) {
    return new Promise(function (resolve, reject) {
      var userQuery = "SELECT id, nombre, apellidos, correo, puntos FROM Cine.Usuario WHERE id = " + id;

      bd_conection.query(userQuery, function (error, resultado) {
        if (error) {
          reject("Error");
        } else {
          if (resultado != "") {
            resolve(resultado[0]);
          } else {
            reject(undefined);
          }
        }
      });
    });
  }

  register(req, res) {
    var nombre = req.body.nombre;
    var apellidos = req.body.apellidos;
    var correo = req.body.correo;
    var pass = req.body.pass1;

    var userQuery = "INSERT INTO Cine.usuario (nombre, apellidos, correo, pass, puntos) VALUES ('" + nombre + "', '" + apellidos + "', '" + correo + "', '" + pass + "', 0);";
    console.log(userQuery);

      bd_conection.query(userQuery, function (error, resultado) {
        if (error) {
          console.log(error);
          res.writeHead(500);
          res.end();
        } else {
          console.log(resultado);
          if (resultado != "") {
            res.writeHead(200);
            res.end();
          } else {
            res.writeHead(500);
            res.end();
          }
        }
      });
  }

}

var controlador = new controller();

module.exports = controlador;
