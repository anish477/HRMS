const express = require("express");
const {
  getCreds,
  getCred,
  createCred,
  deleteCred,
  updateCred,
} = require("../controllers/credController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all cred routes
router.use(requireAuth);

// GET all creds
router.get("/", getCreds);

//GET a single cred
router.get("/:id", getCred);

// POST a new cred
router.post("/", createCred);

// DELETE a cred
router.delete("/:id", deleteCred);

// UPDATE a cred
router.patch("/:id", updateCred);

module.exports = router;
