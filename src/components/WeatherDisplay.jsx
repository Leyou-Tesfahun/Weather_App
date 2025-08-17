export default function WeatherDisplay({ data, unit }) {
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const speedUnit = unit === "metric" ? "m/s" : "mph";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-96 border border-gray-200">
      {/* Location */}
      <h2 className="text-2xl font-semibold mb-2">
        {data.name}, {data.sys.country}
      </h2>

      {/* Weather Icon */}
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="mx-auto"
      />

      {/* Temperature */}
      <p className="text-5xl font-bold">
        {Math.round(data.main.temp)}{tempUnit}
      </p>
      <p className="capitalize text-gray-600 text-lg">{data.weather[0].description}</p>

      {/* Weather Details Grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div className="p-3 bg-blue-50 rounded-lg shadow-sm">
          💧 Humidity: <span className="font-semibold">{data.main.humidity}%</span>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg shadow-sm">
          💨 Wind: <span className="font-semibold">{data.wind.speed} {speedUnit}</span>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg shadow-sm">
          👁 Visibility: <span className="font-semibold">{(data.visibility / 1000).toFixed(1)} km</span>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg shadow-sm">
          ☁️ Cloud Cover: <span className="font-semibold">{data.clouds.all}%</span>
        </div>
      </div>
    </div>
  );
}
