import React, { Component } from 'react';
import WeatherForm from '../WeatherForm/WeatherForm';
import WeatherData from '../WeatherData/WeatherData';

// const API_KEY = 'c90f2ac6524a64323f35731259d12362';

export default class WeatherContainer extends Component {
    // getWeather = async() => {
    //     const api_call = await fetch(`https://openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);

    //     const data = await api_call.json();
    
    render() {
        return (
            <div>
                <WeatherForm /> 
                <WeatherData />
                <h1>HI</h1>
            </div>
        )
    }
}


