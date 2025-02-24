const express = require("express");
const router = express.Router();
const getProductsList = require("../controllers/getProducts");

router.get("/", getProductsList);

module.exports = router;
