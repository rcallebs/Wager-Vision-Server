const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BetHistorySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalBets: { type: Number, default: 0 },
    totalStake: { type: Number, default: 0 },
    totalWinnings: { type: Number, default: 0 },
    profit: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BetHistory", BetHistorySchema);
