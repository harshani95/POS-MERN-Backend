const express = require('express');
const router = express.Router();

const productController = require('../controller/ProductController');
// verifyUser = require('../middleware/AuthMiddleware');

// router.post('/create',verifyUser, productController.create);
// router.get('/find-by-id',verifyUser, productController.findById);
// router.delete('/delete-by-id',verifyUser, productController.deleteById);
// router.put('/update',verifyUser, productController.update);
// router.get('/find-all',verifyUser, productController.findAll);

router.post('/create', productController.create);
router.get('/find-by-id', productController.findById);
router.delete('/delete-by-id', productController.deleteById);
router.put('/update', productController.update);
router.get('/find-all', productController.findAll);


module.exports=router;