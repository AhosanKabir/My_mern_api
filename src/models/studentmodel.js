const mongoose = require("mongoose");

let dataScema = mongoose.Schema({
  studentName: {type : String , unique: true},
  studentRoll: Number,
  studentClass: String,
  studentAge: String,
} ,{ versionKey: false });

const studentModels = mongoose.model("students", dataScema);
module.exports = studentModels;
