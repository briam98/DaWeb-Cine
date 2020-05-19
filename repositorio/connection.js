var mysql = require("mysql");

var mySqlConnection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "cine", 
	multipleStatements : true,
	insecureAuth : true
});

mySqlConnection.connect((err) => {
	if (err) {
		console.log(err);
	}
	else {
		console.log("Connected");
	}
}); 

module.exports = mySqlConnection;