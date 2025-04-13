const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Get all categories
router.get('/', categoryController.getAllCategories);

//Get products by Category ID
router.get('/:id/products',categoryController.getProductsByCategoryId);

router.get('/featured',categoryController.getFeaturedCategories);

module.exports = router;