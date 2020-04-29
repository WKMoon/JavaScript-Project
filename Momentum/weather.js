// WookyungMoon

const COORDS = 'coords';
const API_KEY = "bf800cbe6dce46410630e6c5687af783";
const weather = document.querySelector(".js-weather");
function getWeather(lat,lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const country = json.sys.country;
        const temperature = json.main.temp;
        const location = json.name;
        const forcast = json.weather[0].main;
        const humidity = json.main.humidity;
        const wind = json.wind.speed;
        weather.innerText = `Country: ${country}
        City: ${location}
        Weather: ${forcast}
        Temp: ${temperature}
        Humidity: ${humidity}
        Wind: ${wind}`;
    });
}


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const coordsObj = {
        latitude : lat,
        longitude : lon
    };

    saveCoords(coordsObj);
    getWeather(lat,lon);
}

function handleGeoError() {
    console.log("Cannot access your location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }


}


function init() {
    loadCoords();
}

init();