async function searchWeather(){
    try{
        var city = document.getElementById("city").value;
    console.log(city);
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=cordoba,argentina&appid=bc4132385698018c1be6ea9bec28afe6",{mode: 'cors'});
    document.getElementById("change").textContent = response.id;
    }
    catch(err){
        console.log(err);
    }
    
}