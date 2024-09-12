const express = require("express");

const {
  getUsers,
  createtUser,
  getUser,
  upatetUser,
  deleteUser,
  getCurrentuser,
  getMe,
  updateMyPassword,
} = require("../controller/userController");
const {
  Signup,
  Login,
  forgetPassword,
  resetPassword,
  Logout,
  protect,
} = require("../controller/Authorzation");
const router = express.Router();

router.route("/Signup").post(Signup);
router.route("/Login").post(Login);
router.route("/Logout").get(Logout);
router.route("/getMe").get(protect, getCurrentuser, getMe);
router.route("/resetPassword/:id").patch(resetPassword);
router.route("/forgetPassword").post(forgetPassword);
router.route("/updateMyPassword").patch(protect, updateMyPassword);
router.route("/updateMe").patch();
router.route("/deleteMe").patch();
router.route("/").get(getUsers).post(createtUser);
router.route("/:id").get(getUser).patch(upatetUser).delete(deleteUser);

module.exports = router;
