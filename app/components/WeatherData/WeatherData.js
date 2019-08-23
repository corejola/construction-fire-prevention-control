// import axios from "axios";
import React from 'react';

const WeatherData = (props) => {
    // const { temperature, city, country, humidity, description, error } = this.props;
    return (
        <div>
            <h1>WeatherData</h1>
            {/* {{ city } && { country } && <p>Location: {city}, {country}</p>}
            {{ temperature } && <p>Temperature: {temperature}</p>}
            {{ humidity } && <p>Humidity: {humidity}</p>}
            {{ description } && <p>Conditions: {description}</p>} */}
        </div>
    )
}

export default WeatherData;

// API CALL: 
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}