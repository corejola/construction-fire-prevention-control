import React, { Component } from 'react'
import axios from 'axios';
import moment from 'moment';
import './Weather.css';
import kelvinToFahrenheit from '../utils/kelvinToFahrenheit.js';

import { Callout } from 'react-foundation'

const API_KEY = '4f1776abfbce218d3ff8ea54a393591f';

export default class Weather extends Component {
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

        axios.get("http://api.openweathermap.org/data/2.5/weather", {
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
                <h2 className="weatherData">{`${city}, ${country}`}</h2>
                <h2 className="weatherData">Temperature: {(kelvinToFahrenheit(temperature) || 0.00).toFixed(2)} &deg;F</h2>
                <h2 className="weatherData">Humidity: {humidity}</h2>
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
        
        return (
            <div>
                {loading 
                    // ? <h1>Loading ...</h1>
                       ? <div className="d-flex justify-content-center">
                         <div className="spinner-border" role="status">
                         <span className="sr-only">Loading...</span>
                         </div>
                         </div>   
                    : this.renderContent()
                }
               
                {form
                    ? <button className="buttonGet" onClick={this.getWeather}>Get Current Weather</button>
                    : <button className="buttonSearch" onClick={this.searchAgain}>search weather again</button>
                }
                
                {error && <h1 style={{color: "red"}}>{errorMessage}</h1>}
                <div className="callout primary small">
                    <Callout>
                        <h5>{moment().format('dddd, MMMM Do, h:mm a')}</h5>
                        <h5>Get Current Weather</h5>
                        <a>Including temperature and conditions...</a>
                    </Callout>
                </div>
            </div>
        )
    }
}

