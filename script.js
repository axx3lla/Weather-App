const inputCityEl = document.getElementById("cityInput");
const searchBtnEl = document.querySelector(".search-button");
const forecastBtnEl = document.querySelector(".forecast-button");
const locationEl = document.querySelector(".location");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const currentTempEl = document.querySelector(".current-temperature");
const detailsEl = document.querySelector(".details");
const minTempEl = document.querySelector(".min-temperature");
const maxTempEl = document.querySelector(".max-temperature");
const weatherNowContainerEl = document.querySelector(".weather-now");
const iconEl = document.querySelector(".icon");
const forecastedWeatherContainer = document.querySelector(
  ".forecasted-weather"
);
const dayForecastedEl = document.querySelector(".day");

const currentWeatherURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

const forecastedWeatherURL =
  "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

const iconWeatherURL = "http://openweathermap.org/img/w/";

searchBtnEl.addEventListener("click", () => {
  const location = inputCityEl.value;
  if (location) {
    showCurrentWeather(location);
  }
});

function showCurrentWeather(location) {
  const url = `${currentWeatherURL}${location}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherNowContainerEl.style.display = "flex";
      locationEl.innerHTML = data.name;
      currentTempEl.innerHTML = `${Math.round(data.main.temp)}° C`;
      humidityEl.innerHTML = `Humidity: ${data.main.humidity} %`;
      windEl.innerHTML = `Wind: ${data.wind.speed} km/h`;
      minTempEl.innerHTML = `Min: ${data.main.temp_min}° C`;
      maxTempEl.innerHTML = `Max: ${data.main.temp_max}° C`;
      for (const item of data.weather) {
        detailsEl.innerHTML = item.description;
        iconEl.innerHTML = ` <img src="${iconWeatherURL}${item.icon}.png"alt=""></img>`;
      }
    });
}

forecastBtnEl.addEventListener("click", () => {
  const location = inputCityEl.value;
  if (location) {
    showForecastedtWeather(location);
  }
});

function showForecastedtWeather(location) {
  const forecastURL = `${forecastedWeatherURL}${location}`;

  fetch(forecastURL)
    .then((response) => response.json())
    .then((data) => {
      data.list.forEach((item) => {
        const dateAPI = item.dt_txt;
        const date = new Date(dateAPI);
        const options = {
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        };

        let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
        let name = weekDays[date.getDay()];
        console.log(name);
        let dayBlock = document.createElement("div");

        dayBlock.innerHTML = `

        <p class="day">${name}</p>
        <p class="forecasted-temp">${item.main.temp}° C</p>
        <p class="forecasted-description">${item.weather[0].description}</p>

        
        



        `;
        forecastedWeatherContainer.appendChild(dayBlock);

        // dayBlock.innerHTML = console.log(date.toLocaleString("en-US", options));
      });
    });
}

// fetch(forecastURL)
// .then((response) => response.json())
// .then((data) => {
//   for (let i = 0; i <= 39; i++) {
//     const dateAPI = data.list[i].dt_txt;
//     const date = new Date(dateAPI);
//     console.log(date);
//   }
// });
// }
