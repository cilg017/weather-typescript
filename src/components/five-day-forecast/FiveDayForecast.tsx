import React from 'react';
import { Component } from 'react';
import SingleDayForecast from '../single-day-forecast/SingleDayForecast';
import './FiveDayForecast.css'

class FiveDayForecast extends React.Component<any, any> {

    render() {
        const { weather } = this.props
        console.log(this.props);

        console.log('weather', weather);

        return (
            <div className="five-day-container">
                <span>
                    {
                        weather.map (day: any => (
                            <SingleDayForecast key={day.name} data={[]}></SingleDayForecast>

                        ))
                    }
                </span>
            </div>
        );
    }
}

export default FiveDayForecast;