const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BetHistorySchema = new Schema(
  {
    userId: String,
    betId: String,
    stakeAmount: Number,
    odds: Number,
    outcome: Number,
    payout: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("BetHistory", BetHistorySchema);
