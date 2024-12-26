const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherImg = document.querySelector(".weather-icon-img")

async function CheckWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = 'block'
        document.querySelector(".weather").style.display = 'none'
    }
    else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity-details-html").innerHTML = data.wind.speed + " kmph";

        let main = data.weather[0].main

        console.log(main);

        if (main == 'Cloud') {
            weatherImg.src = "img/cloud.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }


        document.querySelector(".error").style.display = 'none'
        document.querySelector(".weather").style.display = 'block'

    }
}

searchBtn.addEventListener("click", ()=>{
    CheckWeather(searchInput.value)
})

CheckWeather()