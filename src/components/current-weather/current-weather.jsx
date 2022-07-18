import "./current-weather.css";
const currentWeather = () => {
  return (
    <div className="current-weather">
      <div className="top">
        <p className="city">New York</p>
        <p className="weather-description">Sunny</p>
        <img
          src="../../../public/icons/01d.png"
          className="weather-img"
          alt="weather"
        />
      </div>

      <div className="bottom">
        <p className="celsius">18°C</p>
        <div className="details">
          <p className="details-label">Details</p>
        </div>
        <div className="parameters">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">20°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">15 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default currentWeather;
