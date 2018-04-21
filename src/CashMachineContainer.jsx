import React, { Component } from 'react';
import CashMachine from './CashMachine';

/**
 * Container component class of the Cash Machine. Handles the logic part
 */
class CashMachineContainer extends Component {
  constructor() {
    super();
    this.state = {
      availableNotes: [100, 50, 20, 10],
      requestedAmount: null,
      withdrawnNotes: [],
      errors: {}
    };
    this.changeRequestedAmount = this.changeRequestedAmount.bind(this);
    this.validateRequestedAmount = this.validateRequestedAmount.bind(this);
    this.processWithdrawal = this.processWithdrawal.bind(this);
    this.sortNotes = this.sortNotes.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }
  
  /**
   * Handles the change of input's value
   * @param {Event Object} e - The Event Object of the changed input
   */
  changeRequestedAmount(e) {
    const requestedAmount = e.target.value;
    this.setState({requestedAmount});
  }
  
  /**
   * Validates the passed amount, storing the errors in state.errors
   */
  validateRequestedAmount() {
    const { requestedAmount }  = this.state;
    let errors = {};
    if (!requestedAmount) {
      const errorMsg = "Please, enter the amount";
      errors.requestedAmount = errorMsg;
      this.setState({errors});
      throw new Error(errorMsg);
    }
    if (!Number.isInteger(requestedAmount / 10)) {
      const errorMsg = "Invalid amount. Available notes are 100, 50, 20 and 10.";
      errors.requestedAmount = errorMsg;
      this.setState({errors});
      throw new Error(errorMsg);
    }
  }
  
  /**
   * Prepare the withdrawal to deliver the least number of notes, storing the notes to be delivered in state.withdrawnNotes
   */
  sortNotes() {
    const { availableNotes, requestedAmount } = this.state;
    let amount = requestedAmount,
        withdrawnNotes = [];
    availableNotes.map(note => {
      let ocurrencies = Math.floor(amount/note);
      for (let i = 0; i < ocurrencies; i++) {
        withdrawnNotes.push(note);
        amount = amount - note;
      }
      return null;
    });
    this.setState({withdrawnNotes});
  }
  
  /**
   * Processes the withdrawl
   */
  processWithdrawal() {
    this.setState({withdrawnNotes: []}, ()=>{

      const { requestedAmount } = this.state;
      try {
        this.validateRequestedAmount(requestedAmount);
      } catch (error) {
        console.error(error);
        return false;
      }
      this.sortNotes(requestedAmount);
    });
  }

  /**
   * Clears the errors object in state
   */
  clearErrors() {
    this.setState({errors: {}});
  }

  /**
   * Renders the presentational component passing in the necessary data and functions
   */
  render() {
    const { requestedAmount, errors, withdrawnNotes } = this.state;
    return (
      <CashMachine
        requestedAmount={requestedAmount}
        changeRequestedAmount={this.changeRequestedAmount}
        processWithdrawal={this.processWithdrawal}
        withdrawnNotes={withdrawnNotes}
        errors={errors}
        clearErrors={this.clearErrors}
        />
    );
  }
}

export default CashMachineContainer;
