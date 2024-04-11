const Cred = require("../models/credModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// get all creds
const getCreds = async (req, res) => {
  const creds = await Cred.find().sort({ createdAt: -1 });
  res.status(200).json(creds);
};

// get a single cred
const getCred = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such cred" });
  }

  const cred = await Cred.findById(id);

  if (!cred) {
    return res.status(404).json({ error: "No such cred" });
  }

  res.status(200).json(cred);
};

// create a new cred
const createCred = async (req, res) => {
  const { email, password, firstName, middleName, lastName, personalEmail } =
    req.body;

  let emptyFields = [];

  if (!email) {
    emptyFields.push("email");
  }
  if (!password) {
    emptyFields.push("password");
  }
  if (!firstName) {
    emptyFields.push("firstName");
  }
  if (!lastName) {
    emptyFields.push("lastName");
  }
  if (!personalEmail) {
    emptyFields.push("personalEmail");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  // add to the database
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const cred = await Cred.create({
      email,
      password: hashedPassword,
      firstName,
      middleName,
      lastName,
      personalEmail,
    });
    res.status(200).json(cred);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a cred
const deleteCred = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such cred" });
  }

  const cred = await Cred.findOneAndDelete({ _id: id });

  if (!cred) {
    return res.status(400).json({ error: "No such cred" });
  }

  res.status(200).json(cred);
};

// update a cred
const updateCred = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such cred" });
  }

  const cred = await Cred.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!cred) {
    return res.status(400).json({ error: "No such cred" });
  }

  res.status(200).json(cred);
};

module.exports = {
  getCreds,
  getCred,
  createCred,
  deleteCred,
  updateCred,
};
