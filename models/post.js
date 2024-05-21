const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    name: { type: Schema.Types.ObjectId, ref: "User" },
    post: String,
    sport: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
