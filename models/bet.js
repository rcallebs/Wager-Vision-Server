const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BetSchema = new Schema(
  {
    pick: String,
    betType: String,
    sport: String,
    event: String,
    commenceTime: Date,
    stakeAmount: Number,
    odds: Number,
    outcome: String,
    open: { type: Boolean, default: true },
    dateTimePlaced: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bet", BetSchema);
