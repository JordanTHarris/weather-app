// import { celsiusToFahrenheit, fahrenheitToCelsius } from './tempConvert.js';
import { WeatherAPI } from './WeatherAPI.js';
import { WeatherData } from './WeatherData.js';
import './style.css';
// import Icon from './icon.png';

async function initliaze() {
  const form = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');
  let weather = new WeatherAPI();
  let weatherData = new WeatherData();

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    weatherData = await weather.getCurrentWeather(searchInput.value);
    if (weatherData) {
      displayWeather(weatherData);
    } else {
      console.log('No Weather Data');
    }
  });
}

function displayWeather(weatherData) {
  const cityText = document.querySelector('#city');
  const dateText = document.querySelector('#date');
  const temperatureText = document.querySelector('#temperature');
  const feelsLikeText = document.querySelector('#feels-like');
  const humidityText = document.querySelector('#humidity');
  const windText = document.querySelector('#wind');

  cityText.textContent = `${weatherData.name}, ${weatherData.region}`;
  dateText.textContent = weatherData.localTime;
  temperatureText.textContent = `${weatherData.temperatureF}°F`;
  feelsLikeText.textContent = `${weatherData.feelsLikeF}°F`;
  humidityText.textContent = `${weatherData.humidity}%`;
  windText.textContent = `${weatherData.windMPH} mph`;
}

initliaze();
