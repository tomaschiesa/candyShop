const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

/* ----- HOME -----*/
router.get('/', mainController.index);

/* ----- VISTAS P/ PRUEBAS -----*/
// router.get('/test', function(req, res, next) {
//    res.render('test');
// })

// router.get('/session', function(req, res) {
//    res.send(req.session);
// })

module.exports = router;