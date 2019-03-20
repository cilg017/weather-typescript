import * as React from 'react';
import './App.css';
import FiveDayForecast from '../five-day-forecast/FiveDayForecast';
import InputForm from '../input-form/InputForm';
import SingleDayForecast from '../single-day-forecast/SingleDayForecast';

class App extends React.Component<any, any> { //props, state
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 onClick={() => this.props.test()}>{this.props.weather.name}</h1>
        </header> */}
        <InputForm />
        <FiveDayForecast weather={
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
          </FiveDayForecast>
      </div>
    );
  }
}

export default App;
