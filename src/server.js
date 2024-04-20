const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const vm = require("v-response");
const morgan = require('morgan');
const mongoose = require("mongoose")
app.use(express.json());
app.use(morgan('dev'));
const database = 'mongodb://localhost:27017/levemanagementdb';

mongoose.connect((database), {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
})
    .then(async () => {
        vm.log("connected to database", database);
    })
    .catch(err => vm.log("error mongodb", err));


app.listen(port, () => vm.log("server running on port:", port));
