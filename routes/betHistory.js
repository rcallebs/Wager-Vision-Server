const express = require("express");
const router = express.Router();
const betHistoryCtrl = require("../controllers/bets");
const { stripToken, verifyToken } = require("../middleware");

router.get("/", betHistoryCtrl.index);
// router.post("/", stripToken, verifyToken, betHistoryCtrl.create);
// router.get("/:id", stripToken, verifyToken, betHistoryCtrl.show);
// router.delete("/:id", stripToken, verifyToken, betHistoryCtrl.delete);
// router.put("/:id", stripToken, verifyToken, betHistoryCtrl.update);

module.exports = router;
