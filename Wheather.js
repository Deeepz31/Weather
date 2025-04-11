
const button = document.getElementById('search-btn');
const temp = document.getElementById("Temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const speed = document.getElementById("speed");
const input = document.getElementById("city-input");
const iconImg = document.getElementById("weather-icon");

async function getData(cityName) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=daba6fc7de8245b187994629251703&q=${cityName}&aqi=yes`);
    return await response.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    if (!value) return;

    try {
        const result = await getData(value);

        city.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
        temp.innerText = `${result.current.temp_c}°C`;
        humidity.innerText = `Humidity: ${result.current.humidity}%`;
        speed.innerText = `Wind Speed: ${result.current.wind_kph} km/h`;
        iconImg.src = "https:" + result.current.condition.icon;
        // ✅ Set the icon
        const iconUrl = "https:" + result.current.condition.icon;
        iconImg.src = iconUrl;

    } catch (error) {
        alert("City not found or API error");
        console.error(error);
    }
});

