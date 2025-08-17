export default function WeatherDisplay({ data }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md text-center w-80">
      <h2 className="text-xl font-semibold">{data.name}, {data.sys.country}</h2>
      <p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p>
      <p className="capitalize">{data.weather[0].description}</p>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <p>💧 Humidity: {data.main.humidity}%</p>
        <p>💨 Wind: {data.wind.speed} km/h</p>
      </div>
    </div>
  );
}
