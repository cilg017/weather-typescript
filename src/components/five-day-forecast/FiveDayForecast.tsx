import React from 'react';
import SingleDayForecast from '../single-day-forecast/SingleDayForecast';
import './FiveDayForecast.css'

class FiveDayForecast extends React.Component<any, any> {

    render() {
        const { weather } = this.props;

        return (
            <div className="five-day-container">
                <span>
                    {
                        weather ? weather.map ((day: any) => (
                            <SingleDayForecast key={day.name} data={day} showCurrentTemp={false}></SingleDayForecast>
                        )) : null
                    }
                </span>
            </div>
        );
    }
}

export default FiveDayForecast;