import React, { Component } from 'react'

export default class WeatherForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..."/>
                <button>Get Current Weather</button>
            </form>
                
        )
    }
}
