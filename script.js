const button=document.getElementById("search-button");
const input=document.getElementById("city-input");
const cityname= document.getElementById("city-name");
const citytime= document.getElementById("city-time");
const citytemp= document.getElementById("temp");
async function data(city){
    const res=  await fetch(`http://api.weatherapi.com/v1/current.json?key=161c54fb76a9427dade80612250504&q=${city}&aqi=yes
`);
return await res.json();
}

button.addEventListener("click", async ()=>{
      const val=input.value;
    const ans= await data(val);
    cityname.innerText=`${ans.location.name}, ${ans.location.region} - ${ans.location.country}`;
    citytime.innerText=`${ans.location.localtime}`;
    citytemp.innerText=`${ans.current.temp_c}°C`;
    console.log(ans);
});

