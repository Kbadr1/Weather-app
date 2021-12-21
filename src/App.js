import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import axios from "axios";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);

  const getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      )
      .then(({ data }) => {
        setWeather(data);
        setError(false);
      })
      .catch(() => {
        setError(true);
      });
  };

  const updateSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getSearchResults = (e) => {
    e.preventDefault();
    setCity(searchTerm);
    setSearchTerm("");
  };

  useEffect(() => {
    city && getWeather();
  }, [city]);

  return (
    <div className="app container">
      <h1 className="app-title">Weather App</h1>
      <Form
        searchTerm={searchTerm}
        updateSearch={updateSearch}
        getSearchResults={getSearchResults}
      />
      <Weather weather={weather} error={error} />
    </div>
  );
}

export default App;
