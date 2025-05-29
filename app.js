const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mockWeather = {
  Melbourne: { temp: 21, condition: 'Sunny' },
  Sydney: { temp: 24, condition: 'Cloudy' },
  Brisbane: { temp: 28, condition: 'Rainy' },
  Perth: { temp: 26, condition: 'Windy' }
};

app.get('/weather', (req, res) => {
  const city = req.query.city;
  if (mockWeather[city]) {
    res.json({ city, ...mockWeather[city] });
  } else {
    res.status(404).json({ error: 'City not found' });
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Weather API running on port ${PORT}`);
  });
}

module.exports = app;
