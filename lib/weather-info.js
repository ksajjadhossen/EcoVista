export const getWeatherData = async (lat, lon) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log("data is here:", data);
    return data?.weather?.[0] || null;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
export const getTemperatureData = async (lat, lon) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data?.main || null;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
export const getWindData = async (lat, lon) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data?.wind || null;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
export const getAQIData = async (lat, lon) => {
  try {
    const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data?.list?.[0] || null;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
