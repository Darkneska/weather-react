import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import './Search.css';

export default function Search(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }
function search(){
    const apiKEY ="af87a624e39d4b2fea09075a0839db55";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKEY}&units=metric`;
    axios.get(apiURL).then(handleResponse);

}

    function handleSubmit(event) {
            event.preventDefault();
            search(city);
        }

    function handleCityChange(event) {
            setCity(event.target.value);

        }
    
    if (weatherData.ready) {
    return (
        <div className="Search">
            <form onSubmit={handleSubmit}> 
                <div className="row">
                 <div className="col-9">
                <input type="search" 
                        placeholder="Enter a city.." 
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                        />
                        </div>
                        <div className="col-3">
            <input type="submit" value="Search" className="btn 
            btn-primary"/>
            </div>
            </div>
            </form>
            <WeatherInfo data={weatherData}/>
            </div>
    );
}   else {
    search();
     return(
       "Loading...")
      ;
  }
}