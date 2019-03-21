import React from 'react';
import { Component } from 'react';
import './SingleDayForecast.css';

const currentTemp = {
    display: 'block'
}

const hideCurrentTemp = {
    display: 'none'
}

export default class SingleDayForecast extends React.Component<any, any> {

    render() {
        const {data, showCurrentTemp } = this.props;

        function convertToCelcius(temperature: number) {
            return (temperature - 273.15);
        }

        if (data) {
            return(
                <div className="single-day-forecast">

                    <div className="title">{data.name}</div>
                    <div style={showCurrentTemp ? currentTemp : hideCurrentTemp}>Current Temperature: {convertToCelcius(data.main.temp)}</div>
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} ></img>
                    <div className="high">High: {convertToCelcius(data.main.temp_max)}</div>
                    <div className="low">Low: {convertToCelcius(data.main.temp_min)}</div>
                </div>
            );
        }
        else {
            return(
                <div>

                </div>
            );
        }

    }
}