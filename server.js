const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/hrms', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define payroll schema
const payrollSchema = new mongoose.Schema({
  employeeId: String,
  salary: Number,
  paymentDate: Date
});

// Create payroll model
const Payroll = mongoose.model('Payroll', payrollSchema);

// API endpoints

// Create a new payroll record
app.post('/api/payroll', async (req, res) => {
  try {
    const { employeeId, salary, paymentDate } = req.body;
    const payroll = new Payroll({ employeeId, salary, paymentDate });
    await payroll.save();
    res.status(201).send(payroll);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all payroll records
app.get('/api/payroll', async (req, res) => {
  try {
    const payroll = await Payroll.find();
    res.send(payroll);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
