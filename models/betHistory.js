const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BetHistorySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    betIds: [{ type: Schema.Types.ObjectId, ref: "Bet" }],
    totalBets: Number,
    totalStake: Number,
    outcome: Number,
    totalWinnings: Number,
    Profit: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("BetHistory", BetHistorySchema);
