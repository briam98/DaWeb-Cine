var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var datos = {
		cines: [
			{nombre: "cine1", ubicacion: "ubi1", aforo: "1", numSalas: "1", imagen: "images/cine1.png"},
			{nombre: "cine2", ubicacion: "ubi2", aforo: "2", numSalas: "2", imagen: "images/cine1.png"},
			{nombre: "cine3", ubicacion: "ubi3", aforo: "3", numSalas: "3", imagen: "images/cine1.png"}
		]
	}
	res.render('index', datos);
});

module.exports = router;