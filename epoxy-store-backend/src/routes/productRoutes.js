const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const checkAdminkey = require("../middleware/checkAdminKey");

//Highlighted products
router.get("/highlighted", productController.getHighlightedProducts);

//Get Gallery products
router.get("/gallery", productController.getGalleryProducts);

// Get all products
router.get("/", productController.getAllProducts);

// Get single product
router.get("/:id", productController.getSingleProduct);

////////////////////ADMIN//////////////////////////
// Create product just admin
router.post("/add-product", checkAdminkey, productController.createProduct);

// Delete product
router.delete("/:id", checkAdminkey, productController.deleteProduct);

// Update product
router.put("/:id", checkAdminkey, productController.updateProduct);

module.exports = router;
