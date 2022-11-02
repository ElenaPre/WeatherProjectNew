let week = [
  "Suday",
  "Monday",
  "Tuesday ",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let curentDate = new Date();
let minutes = ("0" + curentDate.getMinutes()).slice(-2);
let date = document.querySelector("#current-time");
date.innerHTML = ` ${
  week[curentDate.getDay()]
} ${curentDate.getHours()}:${minutes}`;

function displayCityTemp(response) {
  console.log(response);
  let currentCity = document.querySelector("h1");
  currentCity.innerHTML = response.data.name;
  let tempDeskr = document.querySelector("#weatherDescr");
  tempDeskr.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector(".humid");
  humidity.innerHTML = response.data.main.humidity;
  document.querySelector(".wind").innerHTML = response.data.wind.speed;
  let tempCityTemp = document.querySelector("#temteratura");
  tempCityTemp.innerHTML = Math.round(response.data.main.temp);
}

function findCurrentCity(city) {
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCityTemp);
}

findCurrentCity("Paris");

function changeCityName(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-sity").value;
  findCurrentCity(cityName);
}
function showLocation(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "ed238469f9b5e9d801834270e65449bc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayCityTemp);
}
function findLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}
let buttonSearch = document.querySelector("#searching-form");
buttonSearch.addEventListener("submit", changeCityName);
let buttonLocation = document.querySelector("#location");
buttonLocation.addEventListener("click", findLocation);
