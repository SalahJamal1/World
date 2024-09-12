const City = require("../model/Cities");
const {
  getAll,
  createtOne,
  getOne,
  upatetOne,
  deleteOne,
} = require("./handelFactory");

exports.getCities = getAll(City);
exports.createtCities = createtOne(City);
exports.getCity = getOne(City);
exports.upatetCities = upatetOne(City);
exports.deleteCities = deleteOne(City);
