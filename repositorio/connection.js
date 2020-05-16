var mysql = require("mysql");

var mySqlConnection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "22091998b",
	database: "Cine", 
	multipleStatements : true,
	insecureAuth : true
});

// mySqlConnection.connect((err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	else {
// 		console.log("Connected");
// 	}
// }); 

module.exports = mySqlConnection;