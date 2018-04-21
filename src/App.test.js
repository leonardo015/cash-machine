import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CashMachine from './CashMachineContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('changes CashMachine.requestedAmount', () => {
  // const obj = new CashMachine();
  // obj.changeRequestedAmount(10);
  // console.log(obj.state);
});
