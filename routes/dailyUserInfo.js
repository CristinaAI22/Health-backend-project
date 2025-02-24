const express = require("express");
const router = express.Router();
const {
  addProduct,
  deleteProduct,
  getDailyInfo,
} = require("../controllers/dailyUser");
const DailyUserInfo = require("../models/dailyUserInfo");

router.post("/", addProduct);
router.delete("/:productId", deleteProduct);
router.get("/:date", getDailyInfo);

module.exports = router;
