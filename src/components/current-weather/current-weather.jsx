import "./current-weather.css";

const currentWeather = ({ data }) => {
  return (
    <div className="current-weather">
      <div className="top">
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.weather[0].description}</p>
        <img
          src={`/icons/${data.weather[0].icon}.png`}
          className="weather-img"
          alt="weather"
        />
      </div>

      <div className="bottom">
        <p className="celsius">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <p className="details-label">Details</p>
        </div>
        <div className="parameters">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {Math.round(data.wind.speed)} m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {Math.round(data.main.humidity)}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {Math.round(data.main.pressure)} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default currentWeather;
