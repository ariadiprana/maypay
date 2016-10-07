const express = require('express')
const router = express.Router()
const cardsController = require('../controllers/cards')
const trxsController = require('../controllers/trxs')
const usersController = require('../controllers/users')
const usercardsController = require('../controllers/usercards')

router.get('/', function(req, res) {
    res.render('main.ejs');
});

/*
================== Users API ==================
*/
router.post('/users', usersController.insert)
router.get('/users', usersController.display)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.hapus)
router.get('/users/:id', usersController.detail)

//--------------------------------------------//

/*
================== Cards API ==================
*/
router.post('/cards', cardsController.insert)
router.get('/cards', cardsController.display)
router.put('/cards/:id', cardsController.update)
router.delete('/cards/:id', cardsController.hapus)
router.get('/cards/:id', cardsController.detail)

//--------------------------------------------//

/*
================== User-Cards API ==================
*/
router.post('/usercards', usersController.insert)
router.get('/usercards', usersController.display)
router.put('/usercards/:id', usersController.update)
router.delete('/usercards/:id', usersController.hapus)
router.get('/usercards/:id', usersController.detail)

//--------------------------------------------//


/*
================ Transactions API ================
*/
router.post('/trxs', trxsController.insert)
router.get('/trxs', trxsController.display)
router.put('/trxs/:id', trxsController.update)
router.delete('/trxs/:id', trxsController.hapus)
router.get('/trxs/:id', trxsController.detail)

module.exports = router
