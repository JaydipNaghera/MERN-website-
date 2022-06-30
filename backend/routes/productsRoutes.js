const express = require("express");
const {
  getProduct,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} = require("../controllers/productsController");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

//GET ROUTE FOR ALL PRODUCTS
router.route("/products").get(getProducts).post(protect, admin, createProduct);
router.route("/products/:id/reviews").post(protect, createProductReview);
router.get("/products/top", getTopProducts);
//GET ROUTE FOR SINGLE PRODUCT
router
  .route("/products/:id")
  .get(getProduct)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

module.exports = router;
