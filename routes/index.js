var express = require('express');
var router = express.Router();

/* GET home page (index.ejs). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Sección (nosotros.ejs). */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros somos....' });
});
/* GET Sección (productos.ejs). */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Nuestros productos....' });
});


module.exports = router;
