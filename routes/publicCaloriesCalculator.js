const express = require("express");
const router = express.Router();
const calculateCalories = require("../controllers/publicCaloriesIntake");

router.post("/", calculateCalories);

module.exports = router;
