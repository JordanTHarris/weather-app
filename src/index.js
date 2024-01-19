import { WeatherAPI } from './WeatherAPI.js';
import { WeatherData } from './WeatherData.js';
import './style.css';
// import Icon from './icon.png';

const weather = new WeatherAPI();
let weatherData = new WeatherData();

async function initliaze() {
  const form = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    weatherData = await weather.getCurrentWeather(searchInput.value);
    if (weatherData) {
      displayWeather(weatherData);
    } else {
      console.log('No Weather Data');
    }
  });

  // No visible labels by default
  setLabelsVisible(false);
  // Load current location by default
  displayCurrentLocationWeather();
}

function displayWeather(data) {
  const locationText = document.querySelector('#location');
  const dateText = document.querySelector('#date');
  const temperatureText = document.querySelector('#temperature');
  const feelsLikeText = document.querySelector('#feels-like');
  const humidityText = document.querySelector('#humidity');
  const windText = document.querySelector('#wind');

  locationText.textContent = `${data.name}, ${data.region}`;
  dateText.textContent = data.localTime;
  temperatureText.textContent = `${data.temperatureF}°F`;
  feelsLikeText.textContent = `${data.feelsLikeF}°F`;
  humidityText.textContent = `${data.humidity}%`;
  windText.textContent = `${data.windMPH} mph`;

  setLabelsVisible(true);
}

function setLabelsVisible(visible = true) {
  const visibility = visible ? 'visible' : 'hidden';
  for (const element of document.querySelectorAll('.weather-label')) {
    element.style.visibility = visibility;
  }
}

function displayCurrentLocationWeather() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const weatherData = await weather.getCurrentWeatherByCoords(position.coords.latitude, position.coords.longitude);
      displayWeather(weatherData);
    });
  }
}

initliaze();
