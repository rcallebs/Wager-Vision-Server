const express = require("express");
const router = express.Router();

const apiCtrl = require("../controllers/theOddsAPI");

// Define routes
router.get("/sports", apiCtrl.getSports);
router.get("/odds", apiCtrl.getOdds);
router.get("/odds/nfl", apiCtrl.getNFLOdds);

module.exports = router;
