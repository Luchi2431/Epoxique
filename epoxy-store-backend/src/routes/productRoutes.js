const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const productController = require('../controllers/productController');

// Get all products
router.get('/',productController.getAllProducts);

// Get single product
router.get('/:id', (req, res) => {
  res.json({ message: `Get product ${req.params.id}` });
});

// Create product
router.post('/', (req, res) => {
  res.json({ message: 'Create product' });
});

// Update product
router.put('/:id', (req, res) => {
  res.json({ message: `Update product ${req.params.id}` });
});

// Delete product
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete product ${req.params.id}` });
});

module.exports = router;