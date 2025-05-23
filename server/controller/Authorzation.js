const User = require("../model/user");
const { AppEmail } = require("../utils/AppEmail");
const { AppError } = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { SendToken } = require("../utils/SendToken");

exports.Signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  const url = `${req.protocol}://${req.get("host")}`;
  new AppEmail(user, url).sendWelcome();
  SendToken(user, res);
});
exports.Login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const x = await user?.checkPass(password, user.password);
  if (!user || !x) {
    return next(new AppError("The user or password wrong", 404));
  }
  SendToken(user, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else {
    token = req.cookies.jwt;
  }
  if (!token) {
    return next(new AppError("please Login", 404));
  }
  const x = jwt.verify(token, process.env.JWT);
  const user = await User.findById(x.id);
  if (!user) {
    return next(new AppError("The user is not exist", 404));
  }
  if (await user.checkPassDate(x.iat)) {
    return next(new AppError("The password changed", 404));
  }

  req.user = user;
  next();
});
exports.restrictTo = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      return next(new AppError("You do not have access", 404));
    }
    next();
  };
};

exports.forgetPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return next(new AppError("The user is not exist", 404));
  }

  const resetToken = await user.resetPass();
  await user.save({ validateBeforeSave: false });
  const url = `${req.protocol}://${req.get(
    "host"
  )}/resetPassword/${resetToken}`;

  try {
    new AppEmail(user, url).sendReset();
  } catch (err) {
    user.passwordToken = undefined;
    user.passwordTokenDate = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new AppError(err, 404));
  }
  res.status(200).json({
    status: "success",
    message: "email has been sent",
  });
});
exports.resetPassword = catchAsync(async (req, res, next) => {
  const Resetoken = crypto
    .createHash("sha256")
    .update(req.params.id)
    .digest("hex");
  const user = await User.findOne({
    passwordToken: Resetoken,
    passwordTokenDate: { $gt: Date.now() },
  });
  console.log(user);
  if (!user) {
    return next(new AppError("The url expired", 404));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordToken = undefined;
  user.passwordTokenDate = undefined;
  await user.save();
  SendToken(user, res);
});

exports.Logout = catchAsync(async (req, res, next) => {
  res.cookie("jwt", "", {
    expires: new Date(0),
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.set("Cache-Control", "no-store, max-age=0");
  res.status(200).json({
    status: "success",
    message: "Log out",
  });
});
