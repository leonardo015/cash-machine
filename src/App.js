import React, { Component } from 'react';
import './App.scss';
import CashMachineContainer from './CashMachineContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>App</h1>
        <CashMachineContainer />
      </div>
    );
  }
}

export default App;
