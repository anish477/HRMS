// Controller for category related operations

const Category = require("../models/categoryModel");
const mongoose = require("mongoose");

// get all categories

const getCategories = async (req, res) => {
  const user_id = req.user._id;
  const categories = await Category.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(categories);
};

// get a single category

const getCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category" });
  }

  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({ error: "No such category" });
  }

  res.status(200).json(category);
};

// create a new category

const createCategory = async (req, res) => {
  const { name } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const user_id = req.user._id;
    const category = await Category.create({ name, user_id });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a category

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category" });
  }

  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({ error: "No such category" });
  }

  await Category.findByIdAndDelete(id);

  res.status(200).json({ message: "Category deleted successfully" });
};

// update a category

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such category" });
  }

  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({ error: "No such category" });
  }

  if (!name) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  category.name = name;

  await category.save();

  res.status(200).json(category);
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
