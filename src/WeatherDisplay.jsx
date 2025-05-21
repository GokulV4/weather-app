//// src/WeatherDisplay.jsx

import React from 'react';

const WeatherDisplay = ({ data }) => {
  return (
    <div className="weather-display">
      <h2>{data.name}, {data.sys.country}</h2>
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
