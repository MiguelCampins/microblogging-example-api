var express = require('express');
var router = express.Router();

//middleware que es especifico a este router
router.use(function timeLog(req, res, next) {
    console.log('Fecha actual: ', Date.now());
});
//define la ruta de la pagina del home
router.get('/', function(req, res) {
    res.send('Pagina inicial de los posts');
});
//define la ruta de la pagina about 
router.get('/about', function(req, res) {
    res.send('Acerca de los posts');
});

module.exports = router;