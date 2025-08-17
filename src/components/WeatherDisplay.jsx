export default function WeatherDisplay({ data, unit }) {
  const tempUnit = unit === "metric" ? "°C" : "°F";
  const speedUnit = unit === "metric" ? "m/s" : "mph";

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-80 border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">{data.name}, {data.sys.country}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="mx-auto"
      />
      <p className="text-4xl font-bold">{Math.round(data.main.temp)}{tempUnit}</p>
      <p className="capitalize text-gray-600">{data.weather[0].description}</p>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>💨 Wind: {data.wind.speed} {speedUnit}</p>
      </div>
    </div>
  );
}
