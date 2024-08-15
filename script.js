const urlBase =`https://api.openweathermap.org/data/2.5/weather`;
let API_KEY = process.env.API_KEY;;
const diffKelvin = 273.15;

document.getElementById('button').addEventListener('click', () =>{
    const city = document.getElementById('cityInput').value;
    if(city){
        fetchWeather(city);
    }else{
        alert('Ingrese una ciudad valida')
    }
})

function fetchWeather(city){
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => 

        showWeatherData(data)
    )}

function showWeatherData(data){
    const divResponseData = document.getElementById('responseData');
    divResponseData.innerHTML= '';

    const cityName = data.name;
    const conutryN = data.sys.country;
    const temp = Math.floor(data.main.temp - diffKelvin);
    const description = data.weather[0].description;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${conutryN} `;
    
    const tempInfo = document.createElement('p');
    tempInfo.textContent = `La temperatura esta en  ${temp} °C `;

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `Estado metereologico es  ${description} `;

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfo);
    divResponseData.appendChild(descriptionInfo);
}