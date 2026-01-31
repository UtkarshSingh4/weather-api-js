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
    // 🔥 VERY IMPORTANT DEBUG
    console.error("Axios error message:", error.message);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    }

    throw error; // rethrow so controller can handle
  }
};

module.exports = { fetchWeather };
