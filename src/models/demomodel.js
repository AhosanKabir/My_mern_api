const mongoose = require("mongoose");

let demoScema = mongoose.Schema(
  {
    name: String,
    class: String,
    age: Number,
    roll: Number,
    dateOfBirth: Date,
    gender: Boolean,
    comments: [],
    hobby: {},
    pasion: { type: String, default: "no passion added" },
    mobileNumber: {
      type: String,
      min: [6, "Min 6 & Max 11 but supplied value is = {VALUE}"],
      max: [11, "Min 6 & Max 11 but supplied value is = {VALUE}"],
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: function(value) {
          if (value.length !== 11) {
            return false;
          } else {
            return true;
          }
        },
        message: "11 digit phone number required"
      },
    },
  },
  { versionKey: false }
);

const demoModel = mongoose.model("demos", demoScema);
module.exports = demoModel;
