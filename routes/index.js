var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var datos = {
		cines: [
			{id: "cine1", nombre: "Cine Thader", ubicacion: "Centro Comercial Thader, Av. Juan de Borbón, S/N, 30110 Churra, Murcia", aforo: "2946", numSalas: "14", imagen1: "images/thader1.png", imagen2: "images/thader2.png", imagen3: "images/thader3.png", cartelera: "./cartelera1"},
			{id: "cine2", nombre: "Cine Nueva Condomina", ubicacion: "Autovía del Mediterráneo, KM 760, 30110 Churra, Murcia", aforo: "3500", numSalas: "15", imagen1: "images/nc1.png", imagen2: "images/nc2.png", imagen3: "images/nc3.png", cartelera: "./cartelera2"},
			{id: "cine3", nombre: "Cine Rex", ubicacion: "Calle Vara de Rey, 7, 30001, Murcia", aforo: "350", numSalas: "2", imagen1: "images/rex1.png", imagen2: "images/rex2.png", imagen3: "images/rex3.png", cartelera: "./cartelera3"}
		]
	}

	res.render('index', datos);
});

module.exports = router;
