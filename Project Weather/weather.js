document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const searchButton = document.getElementById('searchButton');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');

    searchButton.addEventListener('click', () => {
        const city = cityInput.value;
        if (city) {
            fetchWeather(city);
        }
    });

    function fetchWeather(city) {
        // Replace with your actual API endpoint and key
        const apiKey = 'YOUR_API_KEY';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                updateWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    function updateWeather(data) {
        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
    }
});
