import React, { Component } from 'react'
import axios from 'axios';
import { Callout } from 'react-foundation'

const API_KEY = '4f1776abfbce218d3ff8ea54a393591f';

function kelvinToFahrenheit(kelvin) {
    return (((kelvin - 273.15) * 9) / 5) + 32
}

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: "",
            city: "",
            country: "",
            humidity: "", 
            description: "", 
            loading: false,
            form: true,
            error: false,
            errorMessage: ""
        }

        this.getWeather = this.getWeather.bind(this)
        this.searchAgain = this.searchAgain.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    getWeather() {
        const { city, country } = this.state;


        if (city.length <= 0 || country.length <= 0) {
            this.setState({
                error: true,
                errorMessage: "city or country is blank"
            })

            return;
        }

        this.setState({loading: true});

        axios.get("http://ap.openweathermap.org/data/2.5/weather", {
            params: {
                appid: API_KEY,
                q: `${city},${country}`
            }
        })
        .then(response => {
            const data = response.data;
            console.log('data', response.data)
            
            this.setState({
                loading: false,
                form: false,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                error: false,
                errorMessage: ""
            })
        })
        .catch(error => {
            this.setState({
                error: true,
                loading: false,
                form: true,
                city: "",
                country: "",
                errorMessage: "Please try again"
            })
        })
    }

    searchAgain() {
        this.setState({
            form: true,
            city: "",
            country: ""
        })
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    renderForm() {
        const {city, country} = this.state;
        return (
            <div>
                <input type="text" name="city" value={city} placeholder="City..." onChange={this.handleInputChange} />
                <input type="text" name="country" value={country} placeholder="Country..." onChange={this.handleInputChange} />
            </div>
        )
    }

    renderData() {
        const {city, country, humidity, temperature} = this.state;
        return (
            <div>
                <h2>{`${city}, ${country}`}</h2>
                <h2>Temperature: {(kelvinToFahrenheit(temperature) || 0.00).toFixed(2)} &deg;F</h2>
                <h2>Humidity: {humidity}</h2>
            </div>
        )

    }

    renderContent() {
        const {form} = this.state;
        return form
            ?  this.renderForm()
            :  this.renderData()
    }

    render() {
        const {city, country, loading, form, error, errorMessage} = this.state;
        // const validForm = city.length > 0 && country.length > 0;
        // console.log(`validForm ${validForm ? 'true' : 'false'}`)
        return (
            <div>
                {loading 
                    ? <h1>Loading ...</h1>
                    : this.renderContent()
                }
               
                {/* <button>Get Current Weather</button> */}
                {form
                    ? <button onClick={this.getWeather}>get weather</button>
                    : <button onClick={this.searchAgain}>search weather again</button>
                }
                
                {error && <h1 style={{color: "red"}}>{errorMessage}</h1>}
                <div className="callout success">
                    <Callout>
                        <h5>Get Current Weather</h5>
                        <a>Find out temperature, conditions, and more...</a>
                    </Callout>
                </div>
            </div>
        )
    }
}

