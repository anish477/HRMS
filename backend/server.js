require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const categotyRoutes = require("./routes/category");
const cors = require("cors");
const employeeRoutes = require("./routes/employee");
const router = express.Router();
const employeeLoginRoute = require("./routes/employeeLoginroute");

// express app
const app = express();

// middleware
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/category", categotyRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api", employeeLoginRoute);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
