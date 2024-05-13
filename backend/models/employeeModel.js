// crerate a schema for employee name eamil password salary address category and image and user_id

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
    user_id: {
      type: String,
      required: true,
    },

    assetone: {
      type: String,
      required: false,
    },
    assettwo: {
      type: String,
      required: false,
    },
    assetthree: {
      type: String,
      required: false,
    },
    assetfour: {
      type: String,
      required: false,
    },
    trainone: {
      type: String,
      required: false,
    },
    traintwo: {
      type: String,
      required: false,
    },
    trainthree: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

employeeSchema.statics.login = async function (email, password) {
  const employee = await this.findOne({ email });
  if (employee) {
    if (password === employee.password) {
      return employee;
    }

    throw Error("Incorrect password");
  }
  throw Error("Incorrect email");
};

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
