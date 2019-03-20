import React from 'react';
import { Component } from 'react';
import './SingleDayForecast.css';



export default class SingleDayForecast extends React.Component<any, any> {

    render() {
        const {data} = this.props;
        return(
            <div className="single-day-forecast">
            {/* <div>hello</div> */}
                <div className="title">{data.name}</div>
                <div className="high">High: {data.high}</div>
                <div className="low">Low: {data.low}</div>
            </div>
        );
    }
}