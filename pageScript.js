let temp = 0;
function changeTemp(){
    console.log("ok");
    if(temp == 0){
        temp = 1;
    }else{
        temp = 0;
    }
    let temps = ["C°", "F°"];
    let text = `Currently on ${temps[temp]}`;
    document.getElementById("tempSelector").innerHTML = text;
}

async function searchWeather(){
    try{
        var city = document.getElementById("city").value;
        var response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc4132385698018c1be6ea9bec28afe6`,{mode: 'cors'});
        var information = await response.json();
        var weatherObject = {
            temperatureK: information.main.temp,
            clime: information.weather[0].main,
            icon: information.weather[0].icon,
            humedad: information.main.humidity,
            coords: {
                lat: information.coord.lat,
                lon: information.coord.lon,
            },
            dt: information.dt,
            timezone: information.timezone,

        }
        console.log(new Date(weatherObject.dt*1000));
        console.log(new Date(weatherObject.dt*1000+(weatherObject.timezone*1000)));
        console.log(JSON.stringify(weatherObject));
        const iconurl = await fetch(`https://openweathermap.org/img/wn/${weatherObject.icon}@2x.png`,{mode: 'cors'});
        console.log(iconurl);
        document.getElementById('climafoto').src = iconurl.url;
        displayReading(weatherObject.clime, weatherObject.temperatureK, weatherObject.humedad);
        document.getElementById("error").innerHTML = "";
    }
    catch(e){
        document.getElementById("error").innerHTML = "if you got an error try writing the city in<br>its native name and with no errors.";
    }
    
    
}
function calculateTemp(temperature){
    if(temp == 0){
        return (temperature - 273.15);
    }else{
        return ((temperature - 273.15) * 9/5 + 32);
    }
}
function displayReading(main, temperature, humidity){
    document.getElementById("weather-text").textContent = `Weather: ${main}`;
    let tempFinal = calculateTemp(temperature);
    document.getElementById("temperature-text").textContent = `Temperature ${Math.round(tempFinal * 100) / 100}°`;
    document.getElementById("humidity-text").textContent = `Humidity: ${humidity}%`;

}

    var city = document.getElementById("city").value;
    console.log(city);
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=cordoba,argentina&appid=bc4132385698018c1be6ea9bec28afe6",{mode: 'cors'});
    console.log(response);
    const information = await response.json();
    console.log(information);
    document.getElementById("change").textContent = information.id;
    
    
}
