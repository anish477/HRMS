// CREATE ROUTES FOR EMPLOYEE

const express = require("express");
const {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeCount,
  getTotalSalary,
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

router.get("/api/employee/count", async (req, res) => {
  const user_id = req.user._id;
  const count = await Employee.countDocuments({ user_id });
  res.status(200).json(count);
});

router.get("/api/employee/total", async (req, res) => {
  const user_id = req.user._id;
  const totalSalary = await Employee.aggregate([
    { $match: { user_id } },
    { $group: { _id: null, total: { $sum: "$salary" } } },
  ]);
  if (totalSalary.length > 0) {
    res.status(200).json(totalSalary[0].total);
  } else {
    res.status(200).json(0);
  }
});

module.exports = router;
