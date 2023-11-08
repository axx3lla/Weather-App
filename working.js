function showCurrentWeather(location) {
  const url = `${currentWeatherURL}${location}`;
  fetch(url).then((response) =>
    response
      .json((response) => response.json())
      .then(
        (data) =>
          (weatherNowContainerEl.innerHTML = data
            .map(
              (city) => `
            <div  class="weather-now">
            <h2>${city.name}</h2>        
            
            </div>
            
            
            `
            )
            .join(""))
      )
  );
}
