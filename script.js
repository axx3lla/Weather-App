const inputCityEl = document.getElementById("cityInput");
const searchBtnEl = document.querySelector(".search-button");
const locationEl = document.querySelector(".location");
const humidityEl = document.querySelector(".humidity");
const pressureEl = document.querySelector(".pressure");
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
      humidityEl.innerHTML = data.main.humidity;
    });
}

// function showCurrentWeather(location) {
//     const url = `${currentWeatherURL}${location}`;
//     fetch(url).then((response) =>
//       response
//         .json((response) => response.json())
//         .then(
//           (data) =>
//             (weatherNowContainerEl.innerHTML = data
//               .map(
//                 (city) => `
//               <div  class="weather-now">
//               <h2>${city.name}</h2>

//               </div>

//               `
//               )
//               .join(""))
//         )
//     );
//   }
