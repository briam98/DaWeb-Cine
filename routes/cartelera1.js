var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var datos = {
		cines: [
			{nombre: "cine1", ubicacion: "ubi1", aforo: "1", numSalas: "1", imagen1: "images/cine1.png", imagen2: "images/cine2.png", imagen3: "images/cine3.png"},
			{nombre: "cine2", ubicacion: "ubi2", aforo: "2", numSalas: "2", imagen1: "images/cine1.png", imagen2: "images/cine2.png", imagen3: "images/cine3.png"},
			{nombre: "cine3", ubicacion: "ubi3", aforo: "3", numSalas: "3", imagen1: "images/cine1.png", imagen2: "images/cine2.png", imagen3: "images/cine3.png"}
		]
	}

	res.render('cartelera1', datos);
});

module.exports = router;