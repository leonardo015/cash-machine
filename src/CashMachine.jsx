import React from 'react';
import './CashMachine.scss';

/**
 * Presentational component function of the Cash Machine. Handles the user interface part
 */
const CashMachine = ({
  requestedAmount,
  changeRequestedAmount,
  processWithdrawal,
  withdrawnNotes
}) => {
  return (
    <div className="cash-machine">
      <h2>Cash Machine</h2>
      <form onSubmit={e => {e.preventDefault(); processWithdrawal()}}>
        <input type="number" min="1" onChange={changeRequestedAmount} />
        <input type="submit" value="OK" />
      </form>
      <br />
      <b>requested amount: {requestedAmount}</b>
      <br /><br />
      { withdrawnNotes.length > 0 && <b>withdrawn notes:</b> }
      <ul>
        {
          withdrawnNotes.map((note, i) => (<li key={i}>[{note}]</li>))
        }
      </ul>
    </div>
  )
}

export default CashMachine;
