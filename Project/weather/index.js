// alert("ok");
const button=document.getElementById("search-btn");
const input=document.getElementById("city-input");


const cityName=document.getElementById("city-name");
const cityTemp=document.getElementById("city-temp");
const cityTime=document.getElementById("city-time");

async function getData(cityName){
    const promise= await fetch(
        `http://api.weatherapi.com/v1/current.json?key=712447b1979c4fb4bb9170244251908&q=${cityName}&aqi=yes`
    )
    return await promise.json()
}
button.addEventListener("click",async ()=>{
    const value=input.value;
    const result=await getData(value);
    console.log(result);
    cityName.innerText=`${result.location.name} ,${result.location.region} - ${result.location.country} `;
    cityTemp.innerText=`${result.current.temp_c} °C` ;
    cityTime.innerText=`${result.location.localtime}`;   

})

// http://api.weatherapi.com/v1/current.json?key=712447b1979c4fb4bb9170244251908&q=London&aqi=yes