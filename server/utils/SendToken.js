const jwt = require("jsonwebtoken");

exports.SendToken = (user, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT, {
    expiresIn: process.env.JWTEX,
  });
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  });
  user.password = undefined;

  res.status(200).json({
    status: "success",
    token,
    user,
  });
};
