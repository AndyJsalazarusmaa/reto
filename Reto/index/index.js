const API_KEY = '32a7ee6ba49943eebfe231827220605';

const fetchData = position => {
const { latitude, longitude } = position.coords;
fetch('http://api.weatherapi.com/v1/current.json?key=32a7ee6ba49943eebfe231827220605&q=Colombia&aqi=no')
    .then(response => response.json())
    .then(data => setWwatherData(data))
}

const setWwatherData = data =>{
    console.log(data);
    const WwatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: 'date',
    }

    Object.keys(weatherData).forEach( key => {
         Document.getElementById(key).textContent = weatherData[key];
    });
}

const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}