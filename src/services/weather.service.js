const axios = require("axios");

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${process.env.WEATHER_BASE_URL}/weather`,
      {
        params: {
          q: city,
          appid: process.env.WEATHER_API_KEY,
          units: "metric"
        }
      }
    );

    const data = response.data;

    return {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      description: data.weather[0].description
    };

  } catch (error) {

    if (error.response && error.response.status === 404) {
      const err = new Error("City not found");
      err.statusCode = 404;
      throw err;
    }

    if (error.response && error.response.status === 401) {
      const err = new Error("Weather service authentication failed");
      err.statusCode = 401;
      throw err;
    }

    const err = new Error("Weather service error");
    err.statusCode = 500;
    throw err;
  }
};

module.exports = { fetchWeather };
