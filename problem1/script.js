const weatherForm = document.getElementById('weather-form');
const weatherInfo = document.getElementById('weather-info');

const API_KEY = 'beca8c8c697949e1b2e30147240604';  

weatherForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch weather data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const { location, current, forecast } = data;
            weatherInfo.innerHTML = `
                <h2>${location.name}</h2>
                <p>${new Date().toLocaleString()}</p>
                <img src="https:${current.condition.icon}" alt="${current.condition.text}">
                <p>Temperature: ${current.temp_f}°F</p>
                <p>Humidity: ${current.humidity}%</p>
                <h3>5-Day Forecast:</h3>
                <ul>`;
                
            forecast.forecastday.forEach(day => {
                weatherInfo.innerHTML += `
                    <li>
                        ${day.date} - ${day.day.condition.text} 
                        (High: ${day.day.maxtemp_f}°F, Low: ${day.day.mintemp_f}°F)
                    </li>`;
            });

            weatherInfo.innerHTML += `</ul>`;
        })
        .catch(error => {
            console.error(error);
            weatherInfo.innerHTML = `<p>${error.message}</p>`;
        });
});