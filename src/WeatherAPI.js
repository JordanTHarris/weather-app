import { WeatherData } from './WeatherData.js';

const API_KEY = '406b5109515c45a0839222558241801';

class WeatherAPI {
  constructor(apiKey = API_KEY) {
    this.apiKey = apiKey;
  }

  async getCurrentWeather(location) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${location}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();

        const weatherData = new WeatherData();
        weatherData.country = data.location.country;
        weatherData.name = data.location.name;
        weatherData.region = data.location.region;
        weatherData.temperatureF = data.current.temp_f;
        weatherData.temperatureC = data.current.temp_c;
        weatherData.feelsLikeF = data.current.feelslike_f;
        weatherData.feelsLikeC = data.current.feelslike_c;
        weatherData.humidity = data.current.humidity;
        weatherData.windMPH = data.current.wind_mph;
        weatherData.localTime = new Date(data.location.localtime_epoch * 1000).toLocaleString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        });

        return weatherData;
      } else {
        console.error('Error:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

  async getCurrentWeatherByCoords(latitude, longitude) {
    return this.getCurrentWeather(`${latitude},${longitude}`);
  }
}

export { WeatherAPI };
