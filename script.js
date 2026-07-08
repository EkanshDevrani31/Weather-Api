document.addEventListener("DOMContentLoaded",()=>{
    const cityInput = document.getElementById("cityInput")
    const Weather = document.getElementById("getWeather")
    const Weather_Info = document.getElementById("WeatherInfo")
    const CityDisplay = document.getElementById("cityName")
    const TempDisplay = document.getElementById("temp")
    const DiscriptionDisplay = document.getElementById("descripton")
    const ErrorDisplay= document.getElementById("error")
    API_KEY ="419d4a7b22303de4b2fec4c5aefb446c";
    // 1.may throw error.
    // 2.Server take time to fetch data.
    Weather.addEventListener("click",async()=>{
        input = cityInput.value.trim( )
        if(!input)return ;

        try {
            const data = await FetchWeatherData(input);
            DisplayWeather(data);
            
        } catch (error) {
            Error();
            
        }
        cityInput.value="";


    })

    async function FetchWeatherData(data){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}`;
        const response = await fetch(url);
        console.log(response)
        if(!response.ok){
            throw new Error("City Not Found");
        }
        const report = await response.json();
        return report ;
      

    }

    function DisplayWeather(data){
        console.log(data)

    const {name, main, weather} = data;
    CityDisplay.textContent = name
    TempDisplay.textContent = `Temperature is : ${main.temp}`
    DiscriptionDisplay.textContent = weather[0].description

    //unhidding
    Weather_Info.classList.remove("Hidden")
    }
    function Error(){
        ErrorDisplay.classList.remove('Hidden')
        Weather_Info.classList.add("Hidden")
    }
})