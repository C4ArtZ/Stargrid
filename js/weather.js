
/*

ORIGINAL CREDIT TO https://github.com/MiguelRAvila

Modified by me


Has to be reaplaced by my own code.

*/

const iconElement = document.getElementById('weather-icon');
const tempElement = document.getElementById('weather-temp');
const descElement = document.getElementById('weather-desc');

// App data
const weather = {};
weather.temperature = {
    unit: 'celsius',
};

// Change to 'F' for Fahrenheit
var tempUnit = 'C';

const KELVIN = 273.15;
const key = weather_apikey;

// Set Position function
setPosition();

function setPosition(position) {
    let latitude = weather_latitude;
    let longitude = weather_longitude;

    getWeather(latitude, longitude);
}

// Get the Weather data
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    console.log(api);

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
            alert(data);
        })
        .then(function (data) {
            let celsius = Math.floor(data.main.temp - KELVIN);
            weather.temperature.value = (tempUnit == 'C') ? celsius : (celsius * 9/5) + 32;
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
        })
        .then(function () {
            displayWeather();
        });
}

// Display Weather info
function displayWeather() {
    iconElement.src = `icons/weather/${weather.iconId}.png`;
    tempElement.innerText = `${weather.temperature.value} °C`;
    //descElement.innerHTML = weather.description;
}