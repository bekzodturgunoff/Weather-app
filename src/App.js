import "./App.css";
import React from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/search/api";
import { useState } from "react";

function App() {
  const [currentWeatherFetch, setCurrentWeather] = useState(null);
  const [currentForecastFetch, setCurrentForecastFetch] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const currentForecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, currentForecastFetch]).then(
      async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentForecastFetch({
          city: searchData.label,
          ...forecastResponse,
        }).catch((err) => console.log(err));
      }
    );
  };

  console.log(currentWeatherFetch);
  console.log(currentForecastFetch);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeatherFetch && <CurrentWeather data={currentWeatherFetch} />}
    </div>
  );
}

export default App;
