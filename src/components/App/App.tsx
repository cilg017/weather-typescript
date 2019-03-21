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
          }}/>


        {/* <FiveDayForecast weather={
          [
            {
              name: 'carly',
              high: 10,
              low: 1
            },
            {
              name: 'carly1',
              high: 11,
              low: 2
            },
            {
              name: 'carly2',
              high: 40,
              low: 20
            }
          ]}>
          </FiveDayForecast> */}
          <SingleDayForecast data={this.props.weather.singleDayForecast} showCurrentTemp={true}></SingleDayForecast>
      </div>
    );
  }
}

export default App;
