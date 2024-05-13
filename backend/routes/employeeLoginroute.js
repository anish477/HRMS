const express = require("express");
const jwt = require("jsonwebtoken");
const Employee = require("../models/employeeModel");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const employee = await Employee.login(email, password);

    const token = jwt.sign(
      {
        _id: employee._id,
      },
      process.env.SECRET,
      {
        expiresIn: "3d",
      }
    );

    res.status(200).json({
      email: employee.email,
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

module.exports = router;
