const apiKey='65bfa1ca2ed8a30c72f140ddd25fbd91'
document.getElementById("getWeatherBtn").addEventListener('click',getWeather)
async function getWeather(){
    const city=document.getElementByIdById('cityinput').value;
    if(city==''){
        alert("please enter city name")
        return;
    }
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
}
try{
    const response =await fetch(url)
    if(!Response.ok){
        throw new error("city not found");
        displayWeather(Data);
    }
    const response =await response.jason();
    displayWeather(Data);
}
catch(error){
    alert(error.messege);
}
    function displayWeather(Data){
        document.getElementByIdById('cityName').innerText=data.name;
        document.getElementByIdById('temp').innerHTML=math.round(data.main.temp-273);
        document.getElementByIdById()
    }


