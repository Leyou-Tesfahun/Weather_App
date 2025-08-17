import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { fetchWeather } from "./api/weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [unit, setUnit] = useState("metric"); // "metric" = °C, "imperial" = °F

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeather(city, unit);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
    if (weather) {
      // Re-fetch weather with new unit
      handleSearch(weather.name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center p-4">
      {/* Header */}
      <Header />

      {/* Search bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Toggle */}
      <button
        onClick={toggleUnit}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Switch to {unit === "metric" ? "°F" : "°C"}
      </button>

      {/* Loader / Error / Weather Display */}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherDisplay data={weather} unit={unit} />}
    </div>
  );
}

export default App;
