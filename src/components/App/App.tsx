import * as React from 'react';
import './App.css';

class App extends React.Component<any, any> { //props, state
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={() => this.props.test()}>{this.props.weather.name}</h1>
        </header>
      </div>
    );
  }
}

export default App;
