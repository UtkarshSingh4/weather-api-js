const express = require("express");
const router = express.Router();
const { getWeather } = require("../controllers/weather.controller");
const weatherLimiter = require("../middleware/rateLimiter");

router.get("/", weatherLimiter, getWeather);

module.exports = router;
