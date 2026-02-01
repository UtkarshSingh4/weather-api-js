const rateLimit = require("express-rate-limit");

const weatherLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 100 requests per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: "Too many requests, please try again later"
  }
});

module.exports = weatherLimiter;
