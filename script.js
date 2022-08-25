const search = document.getElementById("search");
const form = document.getElementById("form");
const main=document.getElementById("main");

async function getWeatherByCity(city){
    search.value="";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
      const data = await response.json();
      showWeatherByCity(data);
}

function showWeatherByCity(data){
    if(document.getElementById("main").hasChildNodes())
        document.getElementById("main").removeChild(document.getElementById("main").firstChild);

    const temp = Math.floor(data.main.temp-273);
    const city = data.name;
    const country = data.sys.country;
    const description= data.weather[0].main;
    const weather = document.createElement("div");
    weather.classList.add("weather");
    weather.innerHTML=`<h2>Temperature in ${city},${country}:<h1>${temp}</h1><sup>o</sup>C</h2>.<h2>There is a possibility of ${description}. </h2>`
    document.getElementById("main").appendChild(weather);

   
               
   

}

form.addEventListener("submit",searchCity);
function searchCity(event){
    event.preventDefault();
    let city = search.value;
    if(city){
        getWeatherByCity(city);
    }
}

