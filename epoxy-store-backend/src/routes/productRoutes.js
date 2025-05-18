const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//Highlighted products
router.get('/highlighted',productController.getHighlightedProducts);

//Get Gallery products
router.get('/gallery',productController.getGalleryProducts);

// Get all products
router.get('/',productController.getAllProducts);

// Get single product
router.get('/:id',productController.getSingleProduct);

// Create product
router.post('/',productController.createProduct);

// Update product
router.put('/:id',productController.updateProduct);

// Delete product
router.delete('/:id',productController.deleteProduct);

module.exports = router;