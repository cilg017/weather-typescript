import * as React from 'react';
import './App.css';
import FiveDayForecast from '../five-day-forecast/FiveDayForecast';
import InputForm from '../input-form/InputForm';
import SingleDayForecast from '../single-day-forecast/SingleDayForecast';

class App extends React.Component<any, any> { //props, state

  render() {

    return (
      <div className="App">

        <InputForm handleSubmit={(e) => {
          e.preventDefault();
          this.props.fetchWeather(e.target.query.value);
          this.props.fetchFiveDayWeather(e.target.query.value);
          }}/>


        <FiveDayForecast weather={this.props.weather.fiveDayForecast}>
          </FiveDayForecast>
          <SingleDayForecast data={this.props.weather.singleDayForecast} showCurrentTemp={true}></SingleDayForecast>
      </div>
    );
  }
}

export default App;
