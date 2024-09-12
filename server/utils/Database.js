const mongoose = require("mongoose");
const dotenv = require("dotenv").config({ path: "./config.env" });

const dbs = process.env.DBS;
exports.Database = async function () {
  try {
    await mongoose.connect(dbs);
    console.log("DB successfully connecting");
  } catch (err) {
    console.log(err);
  }
};
