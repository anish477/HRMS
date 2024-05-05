// CREATE ROUTES FOR EMPLOYEE

const express = require("express");
const {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all employee routes
router.use(requireAuth);

// GET all employees

router.get("/", getEmployees);

// GET a single employee

router.get("/:id", getEmployee);

// POST a new employee

router.post("/", createEmployee);

// DELETE a employee

router.delete("/:id", deleteEmployee);

// UPDATE a employee

router.patch("/:id", updateEmployee);

module.exports = router;
