const mongoose = require("mongoose");
const bcryptJS = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 6,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcryptJS.genSalt(10);
  this.password = await bcryptJS.hash(this.password, salt);

  next();
});

UserSchema.methods.isMatchPassword = async function (password) {
  return await bcryptJS.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
