// src/SearchBar.jsx

import React, { useState } from 'react';

const SearchBar = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      getWeather(city);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
