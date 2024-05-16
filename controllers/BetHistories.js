const express = require("express");
const { Bet, BetHistory } = require("../models");

const stats = async (req, res) => {
  try {
    const userId = req.params.userId;
    const bets = await Bet.find({ userId });

    const totalBets = bets.length;
    const totalStake = bets.reduce((acc, bet) => acc + bet.stakeAmount, 0);
    const totalWinnings = bets.reduce((acc, bet) => {
      if (bet.outcome === "Win") {
        return acc + bet.stakeAmount * bet.odds;
      }
      return acc;
    }, 0);
    const profit = totalWinnings - totalStake;

    res.json({ totalBets, totalStake, totalWinnings, profit });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  stats,
};
