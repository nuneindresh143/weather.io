let result = document.getElementById("result");
let searchbtn = document.getElementById("search-btn");
let cityref = document.getElementById("city");

let getweather = () => {
    let cityvalue = cityref.value;
    if(cityvalue.lenght == 0)
    {
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    }
    else
    {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}&units=metric`;
    cityref.value = "";
    fetch(url).then((resp) => resp.json())
    .then(data =>{
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="des">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp}&#176;</h1>
        <div class="temp-cont">
        <div>
        <h4 class ="title">min</h4>
        <h4 class="temp">${data.main.temp_min}</h4>
        </div>
        <div>
        <h4 class ="title">max</h4>
        <h4 class="temp">${data.main.temp_max}</h4>
        </div>
        </div>
        <div class="temp-con">
        <div class="details">
        <img src="hm.png">
        <h4 class = "humidity">Humidity</h4>
        <h4 class = "hm">${data.main.humidity}</h4>
        </div>
        <div class="details">
        <img src="ps.png">
        <h4 class = "speed">Wind Speed</h4>
        <h4 class ="ps">${data.main.pressure}</h4>
        </div>
        `;
    })
    .catch(()=>{
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
    })
    }
};
searchbtn.addEventListener("click",getweather);
window.addEventListener("load",getweather);