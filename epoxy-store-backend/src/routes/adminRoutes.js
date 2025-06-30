const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const checkAdminKey = require("../middleware/checkAdminKey");

//CREATE
router.post("/create-product", checkAdminKey, adminController.createProduct);

//DELETE
router.delete(
  "/delete-product/:id",
  checkAdminKey,
  adminController.deleteProduct
);

//UPDATE
router.put("/update-product/:id", checkAdminKey, adminController.updateProduct);

module.exports = router;
