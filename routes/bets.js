const express = require("express");
const router = express.Router();

const betCtrl = require("../controllers/bets");

router.get("/", betCtrl.index);

router.post("/", betCtrl.create);

router.get("/:id", betCtrl.show);

router.delete("/:id", betCtrl.delete);

router.put("/:id", betCtrl.update);

module.exports = router;
