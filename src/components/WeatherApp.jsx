/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function WeatherApp() {
  const [location, setLocation] = useState("ahmedabad");
  const [weatherData, setWeatherData] = useState(null);
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(null);

  const fetchedData = () => {
    setError(null);
    setIcon("");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Location not found");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        if (data.weather && data.weather[0] && data.weather[0].icon) {
          getWeatherIcon(data.weather[0].icon);
        }
      })
      .catch((error) => {
        console.log("Data Fetch Error:", error);
        setError(error.message);
      });
  };

  const handlechange = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    fetchedData();
  }, [location]);

  const condition = {
    "01d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
    "02d":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg",
    "03d":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-fog.svg",
    "04d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme.svg",
    "09d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/hail.svg",
    "10d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg",
    "11d":
      "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-overcast-rain.svg",
    "13d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/snow.svg",
    "50d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg",
  };

  const getWeatherIcon = (iconCode) => {
    setIcon(condition[iconCode] || "");
  };

  return (
    <>
      <Navbar />
      <div className="main-container w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="inner-weather-wrapper w-[90%] h-[90%] bg-slate-200 rounded-2xl flex">
          <div className="weather-icon w-1/2 h-full flex justify-center items-center">
            {icon && <img className="h-[22vw]" src={icon} alt="Weather icon" />}
          </div>
          <div className="weather-info w-1/2 h-full flex flex-col justify-center gap-10">
            {location == "" ? (
              <>
                <div className="w-full flex justify-center items-center">
                  <p>Enter a Location</p>
                </div>
              </>
            ) : (
              <>
                {error ? (
                  <div className="error-message text-red-500 text-center text-[2vw]">
                    {error}
                  </div>
                ) : weatherData ? (
                  <>
                    <div className="temp-wrapper flex flex-col justify-center items-center">
                      <span className="text-[5vw]">
                        {weatherData.main && weatherData.main.temp
                          ? Math.round(weatherData.main.temp)
                          : "Location Not Found"}
                        <sup>°</sup>C
                      </span>
                      <span className="text-[3vw]">
                        {weatherData.name || "Unknown Location"}
                      </span>
                    </div>
                    <div className="w-full flex justify-center gap-10">
                      <div className="Humidity-wrapper flex flex-col">
                        <div className="inner-humidity-wrapper flex">
                          <img
                            className="w-10"
                            src="https://img.icons8.com/?size=100&id=sjlgpDZO1OtH&format=png&color=000000"
                            alt="Humidity icon"
                          />
                          <span className="text-[2vw]">
                            {weatherData.main && weatherData.main.humidity
                              ? `${weatherData.main.humidity}%`
                              : "Location Not Found"}
                          </span>
                        </div>
                        <div className="heading text-[1.5vw]">Humidity</div>
                      </div>

                      <div className="Humidity-wrapper flex flex-col">
                        <div className="inner-humidity-wrapper flex">
                          <img
                            className="w-10"
                            src="https://img.icons8.com/?size=100&id=74197&format=png&color=000000"
                            alt="Wind speed icon"
                          />
                          <span className="text-[2vw]">
                            {weatherData.wind && weatherData.wind.speed
                              ? `${weatherData.wind.speed}km/h`
                              : "Location Not Found"}
                          </span>
                        </div>
                        <div className="heading text-[1.5vw]">Wind Speed</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="loading text-center text-[2vw]">
                    Loading...
                  </div>
                )}
              </>
            )}

            <div className="search-bar w-full flex justify-center items-center mt-5">
              <input
                className="w-[60%] p-3 rounded-2xl text-[1vw]"
                onChange={handlechange}
                type="text"
                placeholder="Enter location"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
