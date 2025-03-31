const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productController = require('../controllers/productController');

// Get all products
router.get('/',productController.getAllProducts);

// Get single product
router.get('/:id',productController.getSingleProduct);

// Create product
router.post('/',productController.createProduct);

// Update product
router.put('/:id', (req, res) => {
  res.json({ message: `Update product ${req.params.id}` });
});

// Delete product
router.delete('/:id',productController.deleteProduct);

module.exports = router;