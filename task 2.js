const apiKey = "4455120727dd5dda872727878362ff44"; // Your API key
const scin = document.querySelector(".bton");
const cityInput = document.querySelector(".place");

async function ckweather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    
    if (response.ok) {
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+" Degree Celsius";
    } else {
        document.querySelector(".city").innerHTML = "City not found.";
        document.querySelector(".temp").innerHTML = "";
    }
}

scin.addEventListener("click", () => {
    if (cityInput.value) {
        ckweather(cityInput.value);
    } else {
        alert("Please enter a city name.");
    }
});
