import React from "react";

const Weather = ({ weather, error }) => {
  const { name, sys, wind, main } = weather;

  return (
    <>
      {error ? (
        <p className="error">
          Something went wrong. Check your city spelling and try again.
        </p>
      ) : (
        main &&
        wind && (
          <div className="weather">
            <div className="temp">
              <h6>
                {name}, {sys.country}
              </h6>
              <h5>{Math.round(main.temp)} &deg;C</h5>
            </div>
            <div className="details">
              <div className="titles">
                <h6>Wind</h6>
                <h6>Pressure</h6>
                <h6>Humidty</h6>
              </div>
              <div className="numbers">
                <h6>{wind.speed} m/s</h6>
                <h6>{main.pressure} hpa</h6>
                <h6>{main.humidity} %</h6>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Weather;
