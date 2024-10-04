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
          fetchWeatherByCity("Ahmedabad");
        }
      );
    } else {
      fetchWeatherByCity("Ahmedabad");
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
      <div className="main-container w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="inner-weather-wrapper w-11/12 max-w-4xl h-5/6 bg-white shadow-lg rounded-3xl flex overflow-hidden">
          <div className="weather-icon w-1/2 h-full flex justify-center items-center bg-gradient-to-b from-blue-300 to-blue-500">
            {icon && <img className="h-48" src={icon} alt="Weather icon" />}
          </div>
          <div className="weather-info w-1/2 h-full flex flex-col justify-center gap-8 p-8">
            {isLoading ? (
              <WeatherLoader />
            ) : error ? (
              <div className="error text-center text-red-600 text-xl">{error}</div>
            ) : weatherData ? (
              <>
                <div className="temp-wrapper flex flex-col justify-center items-center">
                  <span className="text-6xl font-bold text-gray-800">
                    {Math.round(weatherData.main.temp)}
                    <sup>°</sup>C
                  </span>
                  <span className="text-2xl text-gray-600">{weatherData.name}</span>
                </div>
                <div className="w-full flex justify-center gap-8">
                  <div className="Humidity-wrapper flex flex-col items-center">
                    <div className="inner-humidity-wrapper flex items-center">
                      <img
                        className="w-8"
                        src="https://img.icons8.com/?size=100&id=sjlgpDZO1OtH&format=png&color=000000"
                        alt="Humidity icon"
                      />
                      <span className="text-xl text-gray-700 ml-2">{weatherData.main.humidity}%</span>
                    </div>
                    <div className="heading text-lg text-gray-500">Humidity</div>
                  </div>
                  <div className="Humidity-wrapper flex flex-col items-center">
                    <div className="inner-humidity-wrapper flex items-center">
                      <img
                        className="w-8"
                        src="https://img.icons8.com/?size=100&id=74197&format=png&color=000000"
                        alt="Wind speed icon"
                      />
                      <span className="text-xl text-gray-700 ml-2">{weatherData.wind.speed} km/h</span>
                    </div>
                    <div className="heading text-lg text-gray-500">Wind Speed</div>
                  </div>
                </div>
              </>
            ) : null}
            <form
              onSubmit={handleSubmit}
              className="search-bar w-full flex justify-center items-center mt-5"
            >
              <input
                className="w-3/4 p-3 rounded-full text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
                value={location}
                type="text"
                placeholder="Enter location"
              />
              <button
                type="submit"
                className="ml-3 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;