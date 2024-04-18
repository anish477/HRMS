const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    fullname:{
        type: String

    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['manager', 'staff'],
        default: 'staff'
    },
    deleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const Usermodel = mongoose.model('user', userSchema, 'Users');
module.exports = Usermodel
