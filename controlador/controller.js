var mysqlConnection = require("../repositorio/connection.js");

function getCines() {
  let cines = [];
  mysqlConnection.query("SELECT * from cine", (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Size: " + rows.length);

      for (let i = 0; i < rows.length; i++) {
        let cine = {nombre: "", ubicacion:""};
        cine.nombre = rows[i].nombre;
        cine.ubicacion = rows[i].ubicacion;
        cines.push(cine);
      }

      console.log("Cines ->" + cines);
      return cines;
    }
  });
}

module.exports = getCines;
