// src/WeatherApp.jsx

import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import SearchBar from './SearchBar';
import './App.css';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'c19e4c5a86cd1cbe3856c67b9709b8cc';     // Replace with your OpenWeatherMap API key
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const getWeather = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(apiUrl, {
        params: {
          q: city,
          appid: apiKey,
          units: 'metric',
        },
      });
      setWeatherData(response.data);
    } catch (err) {
      setError('City not found or API error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <h1 className="app-title">Weather App</h1>
      <SearchBar getWeather={getWeather} />
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default WeatherApp;
