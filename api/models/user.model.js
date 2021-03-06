const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema({
    name: {
      type: String,
      required:  true,
      trim: true,
      minlength: 3
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;