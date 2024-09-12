const mogoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
const userchema = new mogoose.Schema(
  {
    name: {
      type: String,
      maxlength: 8,
      minlength: 4,
      required: [true, "please enter the name"],
      trim: true,
    },

    email: {
      type: String,
      validate: [validator.isEmail, "please enter the email"],
      required: [true, "please enter the name"],
      trim: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: "https://i.pravatar.cc/100?u=zz",
      trim: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: [true, "please enter the password"],
      trim: true,
    },
    passwordConfirm: {
      type: String,
      minlength: 8,
      required: [true, "please enter the passwordconfirm"],
      trim: true,
      validate: {
        validator: function (val) {
          return val === this.password;
        },
        message: "the password is not match",
      },
    },
    passwordChanged: Date,
    passwordToken: String,
    passwordTokenDate: Date,
  },
  {
    timestamps: true,
  }
);

userchema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) return next();
  this.passwordChanged = Date.now() - 1000;
  next();
});
userchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcryptjs.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});
userchema.methods.checkPass = async function (password, userpassword) {
  return await bcryptjs.compare(password, userpassword);
};
userchema.methods.checkPassDate = function (JWTIAT) {
  if (this.passwordChanged) {
    const x = parseInt(this.passwordChanged / 1000, 10);
    return JWTIAT < x;
  }
  return false;
};

userchema.methods.resetPass = async function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.passwordToken = crypto.createHash("sha256").update(token).digest("hex");
  this.passwordTokenDate = Date.now() + 10 * 60 * 1000;
  return token;
};

const User = mogoose.model("User", userchema);
module.exports = User;
