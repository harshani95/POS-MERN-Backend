const express = require('express');
const router = express.Router();

const productController = require('../controller/ProductController');
//verifyUser = require('../middleware/AuthMiddleware');

// router.post('/create',verifyUser, productController.create);
// router.get('/find-by-id',verifyUser, productController.findById);
// router.delete('/delete-by-id',verifyUser, productController.deleteById);
// router.put('/update',verifyUser, productController.update);
// router.get('/find-all',verifyUser, productController.findAll);
// router.get('/find-all-min',verifyUser, productController.findAllMin);
// router.get('/find-all-count',verifyUser, productController.findCount);

router.post('/create', productController.create);
router.get('/find-by-id/:id', productController.findById);
router.delete('/delete-by-id/:id', productController.deleteById);
router.put('/update/:id', productController.update);
router.get('/find-all', productController.findAll);
router.get('/find-all-min', productController.findAllMin);
router.get('/find-all-count', productController.findCount);



module.exports=router;