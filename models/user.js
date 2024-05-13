const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    dateJoined: Date,
    profilePicture: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
