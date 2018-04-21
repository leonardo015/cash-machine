import React, { Component } from 'react';
import './assets/css/App.css';
import CashMachineContainer from './CashMachineContainer';

class App extends Component {
  render() {
    return (
      <main className="app">
        <CashMachineContainer />
      </main>
    );
  }
}

export default App;
