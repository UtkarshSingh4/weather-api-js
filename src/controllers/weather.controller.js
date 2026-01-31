const { fetchWeather } = require("../services/weather.service");

const getWeather = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    const weatherData = await fetchWeather(city);

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
