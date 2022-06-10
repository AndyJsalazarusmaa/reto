$( document ).ready(function() {
    onLoad();

    $('#btnSearchCityWeather').click(onLoad);
});

const fetchData = position => {

    showLoading();

    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var city = document.getElementById('input_city').value;
    document.getElementById('input_latitude').value = lat;
    document.getElementById('input_longitude').value = long;

    $.ajax({
        data: {"latitude" : lat, "longitude" : long, "city" : city.trim()},
        type: "POST",
        dataType: "json",
        url: "WeatherApi.php",
    })
    .done(function( data, textStatus, jqXHR ) {
        setWeatherData(data);
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        console.log( "La solicitud a fallado: " +  textStatus);
    });
}

const setWeatherData = data => {
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: Math.floor(data.main.temp),
        date: getDate(),
    }

    Object.keys(weatherData).forEach( key => {
        setTextContent(key, weatherData[key]);
    });

    hideLoading();
}

const hideLoading = () => {
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');

    loader.style.display = 'none'; 
    container.style.display = 'flex'; 
}

const showLoading = () => {
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');

    loader.style.display = 'flex'; 
    container.style.display = 'none'; 
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${ ('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

const setTextContent = (element, text) => {
    document.getElementById(element).textContent = text;
}

function onLoad() {
    navigator.geolocation.getCurrentPosition(fetchData);
}