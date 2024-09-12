const City = require("../model/Cities");
const { Database } = require("../utils/Database");
const fs = require("fs");
const cities = JSON.parse(fs.readFileSync(`${__dirname}/cities.json`, "utf-8"));

Database();

console.log(cities);
async function importData() {
  try {
    await City.create(cities);
    console.log("created done");
    process.exit(1);
  } catch (err) {
    console.log(err);
  }
}
async function deleteData() {
  try {
    await City.deleteMany();
    console.log("deleted done");
    process.exit(1);
  } catch (err) {
    console.log(err);
  }
}

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
