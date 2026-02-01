# 🌦 Weather API Backend

A backend Weather API built using **Node.js** and **Express** that fetches real-time weather data from a third-party API.  
The project demonstrates clean backend architecture, caching, rate limiting, and proper error handling.

---

## 🚀 Features

- 🌍 Fetch real-time weather data by city name
- ⚡ Redis caching to reduce external API calls
- 🚦 IP-based rate limiting to prevent abuse
- 🔐 Secure configuration using environment variables
- ❌ Clean and meaningful error handling
- 📦 Modular backend architecture (routes, controllers, services)

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **HTTP Client:** Axios
- **Caching:** Redis
- **Rate Limiting:** express-rate-limit
- **Environment Variables:** dotenv
- **Deployment:** Render (optional)

---
## 📁 Project Structure

```text
weather-api-js/
├── src/
│   ├── routes/
│   │   └── weather.routes.js
│   ├── controllers/
│   │   └── weather.controller.js
│   ├── services/
│   │   └── weather.service.js
│   ├── cache/
│   │   └── redis.js
│   ├── middleware/
│   │   └── rateLimiter.js
│   └── app.js
│
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md

```
---

## ⚙️ Setup Instructions (Local)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/weather-api-backend.git
cd weather-api-backend
```

2️⃣ Install dependencies
```bash
npm install
```
3️⃣ Create .env file

```bash
PORT=3000
WEATHER_API_KEY=your_openweather_api_key
WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
REDIS_URL=redis://127.0.0.1:6379

```

4️⃣ Start Redis (WSL / Linux)
```bash
redis-server
```

Verify:
```bash
redis-cli ping
```
5️⃣ Run the server
```bash
npm run dev
```

Server runs at:
```bash
http://localhost:3000
```
## 🌐 API Endpoint
### Get Weather by City
```bash
GET /api/weather?city=Delhi
```
## ✅ Success Response
```bash
{
  "source": "api",
  "data": {
    "city": "Delhi",
    "temperature": 30,
    "humidity": 55,
    "description": "clear sky"
  }
}

```
## ⚡ Cached Response
```bash
{
  "source": "cache",
  "data": { ... }
}
```
## ❌ Error Responses
- Status Code	Message
- 400	City is required
- 404	City not found
- 401	Weather service authentication failed
- 429	Too many requests
- 500	Internal server error
## 🚦 Rate Limiting

- Max 100 requests per IP

- Window: 15 minutes

- Returns HTTP 429 when exceeded

## 🧠 Learning Outcomes

- Working with third-party APIs

- Designing clean backend architecture

- Implementing Redis caching

- Handling real-world backend errors

- Securing configuration with environment variables

- Applying rate limiting for API protection


## 👨‍💻 Author

Utkarsh Singh
Backend Developer | Node.js | APIs | System Design