const express = require("express");

const {
  getCities,
  createtCities,
  getCity,
  upatetCities,
  deleteCities,
} = require("../controller/CitiesController");
const { protect } = require("../controller/Authorzation");
const router = express.Router();

// router.use(protect);
router.route("/").get(getCities).post(createtCities);
router.route("/:id").get(getCity).patch(upatetCities).delete(deleteCities);

module.exports = router;
