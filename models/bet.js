const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BetSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    pick: String,
    betType: String,
    spread: Number,
    sport: String,
    event: String,
    commenceTime: Date,
    stakeAmount: Number,
    odds: Number,
    outcome: { type: String, default: "ytbd" },
    open: { type: Boolean, default: true },
    dateTimePlaced: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bet", BetSchema);
