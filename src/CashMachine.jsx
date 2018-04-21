import React from 'react';
import './assets/css/CashMachine.css';

/**
 * Presentational component function of the Cash Machine. Handles the user interface part
 */
const CashMachine = ({
  requestedAmount,
  changeRequestedAmount,
  processWithdrawal,
  withdrawnNotes,
  errors,
  clearErrors
}) => {
  return (
    <section className="cash-machine">
      <form onSubmit={e => {e.preventDefault(); processWithdrawal();}}>
        <label>Enter the amount to withdraw</label>
        <input type="number" min="1" onChange={changeRequestedAmount} />
        <input type="submit" value="OK" />
      </form>
      {Object.keys(errors).length > 0 ? <div className="error"><span>{errors.requestedAmount}</span><button onClick={clearErrors} className="close-error-btn">OK</button></div> : null}
      <ul className="withdrawn-notes">
        {
          withdrawnNotes.map((note, i) => (<li className={"animated slideInDown fast note note-"+note} key={i}></li>))
        }
      </ul>
    </section>
  )
}

export default CashMachine;
