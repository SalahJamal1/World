const User = require("../model/user");
const { AppError } = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const { SendToken } = require("../utils/SendToken");
const {
  getAll,
  createtOne,
  getOne,
  upatetOne,
  deleteOne,
} = require("./handelFactory");

exports.getUsers = getAll(User);
exports.createtUser = createtOne(User);
exports.getUser = getOne(User);
exports.upatetUser = upatetOne(User);
exports.deleteUser = deleteOne(User);
exports.getMe = getOne(User);

exports.getCurrentuser = (req, res, next) => {
  if (!req.params.id) req.params.id = req.user._id;
  next();
};
exports.updateMyPassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const x = await user.checkPass(req.body.currentpassword, user.password);
  if (!x) {
    return next(new AppError("The current password wrong", 404));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  SendToken(user, res);
});
