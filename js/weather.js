
// Get weather elements from html
const iconElement = document.getElementById('weather-icon');
const tempElement = document.getElementById('weather-temp');

// set Kelvin in Celsius
const KELVIN = 273.15;

//set unit of mesarument to celsius
const weather = {};
weather.temperature = {
    unit: 'celsius',
};

//Call function
getWeather();

// Get the Weather data
function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${weather_latitude}&lon=${weather_longitude}&appid=${weather_apikey}`;

    fetch(api) // Call api
        .then(function (response) { //Return api response as json
            let data = response.json();
            return data;
        })
        .then(function (data) { // Write values to object
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
        })
        .then(function () {
            displayWeather(); // call function to display info
        });
}

// Display Weather
function displayWeather() {
    iconElement.src = `icons/weather/${weather.iconId}.png`;
    tempElement.innerText = `${weather.temperature.value} °C`;
}