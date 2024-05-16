const express = require("express");
const router = express.Router();
const betHistoryCtrl = require("../controllers/BetHistories");
const { stripToken, verifyToken } = require("../middleware");

router.get("/betStats/:userId", betHistoryCtrl.stats);

module.exports = router;
