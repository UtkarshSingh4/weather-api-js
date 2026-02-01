const redisClient = require("../cache/redis");
const { fetchWeather } = require("../services/weather.service");

const CACHE_TTL = 600;

const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const cacheKey = `weather:${city.toLowerCase()}`;
    const cacheWeather = await redisClient.get(cacheKey);

    if (cacheWeather) {
      return res.json({
        source: "cache",
        data: JSON.parse(cacheWeather)
      });
    }

    const weatherData = await fetchWeather(city);

    await redisClient.setEx(
      cacheKey,
      CACHE_TTL,
      JSON.stringify(weatherData)
    )
    res.json({
      source: "api",
      data: weatherData
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getWeather };
