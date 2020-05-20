var express = require('express');
var router = express.Router();

var controller = require('../controller');


/* GET home page. */
router.get('/', function(req, res, next) {

	if (req.cookies.id != undefined) {
		console.log(req.cookies.id);
		var promesa = controller.getTarjeta(req.cookies.id);

		promesa
			.then(datos => {
				console.log("Datos: " + datos);
				res.render('tarjeta', datos);
			} ) 
			.catch(error => res.render('login'));

	} else {
		res.redirect('login');
	}
});

module.exports = router;

/*
ticket
	.then(food => eatFood(food))
	.catch(error => getRefund(error));
*/