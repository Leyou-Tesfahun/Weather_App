export async function fetchForecast(city, unit = "metric") {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${unit}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Forecast not available");
  }
  const data = await response.json();

  // Pick one forecast per day (12:00:00)
  const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  return daily;
}
