const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BetSchema = new Schema(
  {
    sport: String,
    event: String,
    betType: String,
    stakeAmount: Number,
    odds: Number,
    outcome: String,
    dateTimePlaced: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bet", BetSchema);
