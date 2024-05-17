const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/posts");
const { stripToken, verifyToken } = require("../middleware");

router.get("/", postCtrl.index);
router.post("/", stripToken, verifyToken, postCtrl.create);
router.get("/:id", stripToken, verifyToken, postCtrl.show);
router.delete("/:id", stripToken, verifyToken, postCtrl.delete);
router.put("/:id", stripToken, verifyToken, postCtrl.update);

module.exports = router;
