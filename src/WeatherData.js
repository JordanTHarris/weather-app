class WeatherData {
  constructor(country, name, region, temperatureF, temperatureC, feelsLikeF, feelsLikeC, humidity, windMPH, localTime) {
    this.country = country;
    this.name = name;
    this.region = region;
    this.temperatureF = temperatureF;
    this.temperatureC = temperatureC;
    this.feelsLikeF = feelsLikeF;
    this.feelsLikeC = feelsLikeC;
    this.humidity = humidity;
    this.windMPH = windMPH;
    this.localTime = localTime;
  }
}

export { WeatherData };
