const API_KEY = '4f450f20db314922196d92f012b24e39';

const fetchData = position => {
    const { latitud, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data))
    
    
}

const setWeatherData = data =>{
    navigator.log(data);
    const setWeatherData ={
        location: data.name,
        description: data.Weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: data.main.temp,
        date: getDate(),
    }

    Object.keys(weatherData).forEach( key => {
        document.getElementById(key).textcontent = weatherData[key];
    });

    cleanUp();
}

const cleanUp = () => {
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');

    loader.style.display = 'none';
    container.style.display = 'flex';
}
const getDate = () => {
    let date = new Data();
    return `${date.getDate()}-${ ('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

const setTextContent = (element, text) => {
    document.getElementById(element).textContent = text;
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData)
}
