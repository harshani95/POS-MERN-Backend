const express = require('express');
const router = express.Router();

const orderController = require('../controller/OrderController');
//const verifyUser = require('../middleware/AuthMiddleware');

// router.post('/create',verifyUser, orderController.create);
// router.get('/find-by-id',verifyUser, orderController.findById);
// router.delete('/delete-by-id',verifyUser, orderController.deleteById);
// router.put('/update',verifyUser, orderController.update);
// router.get('/find-all',verifyUser, orderController.findAll);

router.post('/create', orderController.create);
router.get('/find-by-id', orderController.findById);
router.delete('/delete-by-id', orderController.deleteById);
router.put('/update', orderController.update);
router.get('/find-all', orderController.findAll);

module.exports=router;