import React, { Component } from 'react'

export default class WeatherForm extends Component {
    render() {
        return (
            <form>
                <input type="text" name="city" placeholder="CITY..."/>
                <input type="text" name="country" placeholder="COUNTRY..."/>
                <button>Get Current Weather</button>
            </form>
                
        )
    }
}
