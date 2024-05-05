// CONTROLLER FOR EMPLOYEE

const Employee = require("../models/employeeModel");
const mongoose = require("mongoose");

// get all employees
const getEmployees = async (req, res) => {
  const user_id = req.user._id;
  const employees = await Employee.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(employees);
};

// get a single employee

const getEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such employee" });
  }

  const employee = await Employee.findById(id);

  if (!employee) {
    return res.status(404).json({ error: "No such employee" });
  }

  res.status(200).json(employee);
};

// create a new employee

const createEmployee = async (req, res) => {
  const { name, email, password, salary, address, category, image } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }
  if (!email) {
    emptyFields.push("email");
  }
  if (!password) {
    emptyFields.push("password");
  }
  if (!salary) {
    emptyFields.push("salary");
  }
  if (!address) {
    emptyFields.push("address");
  }
  if (!category) {
    emptyFields.push("category");
  }
  if (!image) {
    emptyFields.push("image");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const user_id = req.user._id;
    const employee = await Employee.create({
      name,
      email,
      password,
      salary,
      address,
      category,
      image,
      user_id,
    });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a employee

const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such employee" });
  }

  const employee = await Employee.findOneAndDelete({ _id: id });

  if (!employee) {
    return res.status(404).json({ error: "No such employee" });
  }

  res.status(200).json(employee);
};

// update a employee

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, salary, address, category, image } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such employee" });
  }

  const employee = await Employee.findById(id);

  if (!employee) {
    return res.status(404).json({ error: "No such employee" });
  }

  if (
    !name ||
    !email ||
    !password ||
    !salary ||
    !address ||
    !category ||
    !image
  ) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }

  try {
    await Employee.findByIdAndUpdate(id, {
      name,
      email,
      password,
      salary,
      address,
      category,
      image,
    });
    res.status(200).json({ message: "Employee updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee,
};
