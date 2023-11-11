const inputCityEl = document.getElementById("cityInput");
const searchBtnEl = document.querySelector(".search-button");
const locationEl = document.querySelector(".location");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
const currentTempEl = document.querySelector(".current-temperature");
const detailsEl = document.querySelector(".details");
const minTempEl = document.querySelector(".min-temperature");
const maxTempEl = document.querySelector(".max-temperature");
const weatherNowContainerEl = document.querySelector(".weather-now");

const currentWeatherURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

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
      locationEl.innerHTML = data.name;
      currentTempEl.innerHTML = `${Math.round(data.main.temp)}° C`;
      humidityEl.innerHTML = `Humidity: ${data.main.humidity} %`;
      windEl.innerHTML = `Wind: ${data.wind.speed} km/h`;
      minTempEl.innerHTML = `Minimum temperature: ${data.main.temp_min}° C`;
      maxTempEl.innerHTML = `Maximum temperature: ${data.main.temp_min}° C`;
      for (const item of data.weather) {
        detailsEl.innerHTML = item.description;
      }
    });
}

// function showCurrentWeather(location) {
//   const url = `${currentWeatherURL}${location}`;
//   fetch(url).then((response) =>
//     response
//       .json((response) => response.json())
//       .then(
//         (data) =>
//           (weatherNowContainerEl.innerHTML = Object.entries(data)
//             .map(
//               (city) => `
//               <div  class="weather-now">
//               <h2>${city.name}</h2>

//               </div>

//               `
//             )
//             .join(""))
//       )
//   );
// }

// function showCurrentWeather(location) {
//   const url = `${currentWeatherURL}${location}`;
//   fetch(url).then((response) =>
//     response
//       .json((response) => response.json())
//       .then((data) => console.log(Object.entries(data)))
//   );
// }
