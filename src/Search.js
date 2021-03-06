import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Loader from "react-loader-spinner";
import axios from "axios";
import './Search.css';

export default function Search(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
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
            <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
    );
}   else {
    search();
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
    ;
  }
}