const express = require('express');
const router = express.Router();

const customerController = require('../controller/CustomerController');
//const verifyUser = require('../middleware/AuthMiddleware');

// router.post('/create',verifyUser, customerController.create);
// router.get('/find-by-id',verifyUser, customerController.findById);
// router.delete('/delete-by-id',verifyUser, customerController.deleteById);
// router.put('/update',verifyUser, customerController.update);
// router.get('/find-all',verifyUser, customerController.findAll);

router.post('/create', customerController.create);
router.get('/find-by-id', customerController.findById);
router.delete('/delete-by-id', customerController.deleteById);
router.put('/update', customerController.update);
router.get('/find-all', customerController.findAll);

module.exports=router;