const express = require("express");
const router = express.Router();
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const requireAuth = require("../middleware/requireAuth");

// require auth for all category routes
router.use(requireAuth);

// GET all categories
router.get("/", getCategories);

// GET a single category

router.get("/:id", getCategory);

// POST a new category

router.post("/", createCategory);

// DELETE a category

router.delete("/:id", deleteCategory);

// UPDATE a category

router.patch("/:id", updateCategory);

module.exports = router;
