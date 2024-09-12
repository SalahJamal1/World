const mogoose = require("mongoose");

const CitySchema = new mogoose.Schema({
  cityName: String,
  country: String,
  emoji: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  notes: String,
  position: {
    lat: Number,
    lng: Number,
  },
});

const City = mogoose.model("City", CitySchema);
module.exports = City;
