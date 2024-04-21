const API_URI = (lat, lon) =>
  `${process.env.OPEN_WEATHER_bASE_API}/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=metric`;

export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(API_URI(lat, lon));

    const data = await response.json();
    return data?.weather[0];
  } catch (error) {
    console.log(error.message);
  }
};

export const getTemperatureData = async (lat, lon) => {
  console.log(lat, lon);
  try {
    const response = await fetch(API_URI(lat, lon));
    const data = await response.json();
    return data?.main;
  } catch (e) {
    console.error(e.message);
  }
};

export const getWindData = async (lat, lon) => {
  try {
    const response = await fetch(API_URI(lat, lon));

    const data = await response.json();
    return data?.wind;
  } catch (e) {
    console.error(e.message);
  }
};

export const getAQIData = async (lat, lon) => {
  try {
    const response = await fetch(
      `${process.env.OPEN_WEATHER_bASE_API}/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
    );
    const data = await response.json();
    return data?.list[0];
  } catch (e) {
    console.error(e.message);
  }
};
