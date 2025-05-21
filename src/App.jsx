import React, { useState } from 'react';
import axios from 'axios';
import './styles/App.css'; // Or Tailwind

const API_KEY = 'c19e4c5a86cd1cbe3856c67b9709b8cc';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!query) return;
    try {
      const res = await axios.get(`http://api.weatherstack.com/current`, {
        params: {
          access_key: API_KEY,
          query,
        },
      });
      if (res.data.error) {
        setError(res.data.error.info);
        setWeather(null);
      } else {
        setWeather(res.data);
        setError('');
      }
    } catch (err) {
      setError('Failed to fetch data');
    }
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-card">
          <h2>{weather.location.name}, {weather.location.country}</h2>
          <p>{weather.current.weather_descriptions[0]}</p>
          <img src={weather.current.weather_icons[0]} alt="weather icon" />
          <p>Temperature: {weather.current.temperature}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
