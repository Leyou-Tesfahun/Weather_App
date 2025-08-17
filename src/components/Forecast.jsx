export default function Forecast({ data, unit }) {
  const tempUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="mt-8 w-full max-w-3xl">
      <h3 className="text-xl font-bold mb-4 text-center">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        {data.map((day, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow text-center border"
          >
            <p className="font-semibold">
              {new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "short" })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
              className="mx-auto"
            />
            <p className="text-lg font-bold">
              {Math.round(day.main.temp)}{tempUnit}
            </p>
            <p className="text-sm capitalize text-gray-600">
              {day.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
