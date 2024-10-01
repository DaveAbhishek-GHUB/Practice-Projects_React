/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import WeatherLoader from "./WeatherLoader";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          fetchWeatherByCity("Ahmedabad"); // Default city if geolocation fails
        }
      );
    } else {
      fetchWeatherByCity("Ahmedabad"); // Default city if geolocation is not supported
    }
  }, []);

  const fetchWeatherByCoords = (lat, lon) => {
    setIsLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLocation(data.name);
        if (data.weather && data.weather[0] && data.weather[0].icon) {
          getWeatherIcon(data.weather[0].icon);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data");
        setIsLoading(false);
      });
  };

  const fetchWeatherByCity = (city) => {
    setIsLoading(true);
    setError(null);
    setIcon("");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
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
        setLocation(data.name);
        if (data.weather && data.weather[0] && data.weather[0].icon) {
          getWeatherIcon(data.weather[0].icon);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Data Fetch Error:", error);
        setError(error.message);
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      fetchWeatherByCity(location);
    }
  };

  const condition = {
    "01d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg",
    "02d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg",
    "03d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-fog.svg",
    "04d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme.svg",
    "09d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/hail.svg",
    "10d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg",
    "11d": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-overcast-rain.svg",
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
            {isLoading ? (
              <WeatherLoader />
            ) : error ? (
              <div className="error text-center text-red-500 text-[2vw]">{error}</div>
            ) : weatherData ? (
              <>
                <div className="temp-wrapper flex flex-col justify-center items-center">
                  <span className="text-[5vw]">
                    {Math.round(weatherData.main.temp)}
                    <sup>°</sup>C
                  </span>
                  <span className="text-[3vw]">{weatherData.name}</span>
                </div>
                <div className="w-full flex justify-center gap-10">
                  <div className="Humidity-wrapper flex flex-col">
                    <div className="inner-humidity-wrapper flex">
                      <img
                        className="w-10"
                        src="https://img.icons8.com/?size=100&id=sjlgpDZO1OtH&format=png&color=000000"
                        alt="Humidity icon"
                      />
                      <span className="text-[2vw]">{weatherData.main.humidity}%</span>
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
                      <span className="text-[2vw]">{weatherData.wind.speed}km/h</span>
                    </div>
                    <div className="heading text-[1.5vw]">Wind Speed</div>
                  </div>
                </div>
              </>
            ) : null}
            <form onSubmit={handleSubmit} className="search-bar w-full flex justify-center items-center mt-5">
              <input
                className="w-[60%] p-3 rounded-2xl text-[1vw]"
                onChange={handleChange}
                value={location}
                type="text"
                placeholder="Enter location"
              />
              <button type="submit" className="ml-2 p-3 bg-blue-500 text-white rounded-2xl">Search</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;