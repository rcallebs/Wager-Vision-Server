const express = require("express");
const router = express.Router();
const betCtrl = require("../controllers/bets");
const { stripToken, verifyToken } = require("../middleware");

router.get("/", stripToken, verifyToken, betCtrl.index);
router.post("/", stripToken, verifyToken, betCtrl.create);
router.get("/:id", stripToken, verifyToken, betCtrl.show);
router.delete("/:id", stripToken, verifyToken, betCtrl.delete);
router.put("/:id", stripToken, verifyToken, betCtrl.update);

module.exports = router;
