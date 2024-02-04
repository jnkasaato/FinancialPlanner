import React, { useState, useEffect } from 'react';

function Transactions({ sampleTransactions, onUpdateTransactions }) {
    const [transactions, setTransactions] = useState(sampleTransactions);

    const [newTransaction, setNewTransaction] = useState({
        type: 'Income',
        amount: '',
        category: '',
        date: '',
    });

    useEffect(() => {
        onUpdateTransactions(transactions);
    }, [transactions, onUpdateTransactions]);

    const handleAddTransaction = (e) => {
        e.preventDefault();
        if (newTransaction.amount && newTransaction.category && newTransaction.date) {
            const transactionToAdd = {
                type: newTransaction.type,
                amount: parseFloat(newTransaction.amount),
                category: newTransaction.category,
                date: newTransaction.date,
            };
            setTransactions([transactionToAdd, ...transactions]);
            setNewTransaction({
                type: 'Income',
                amount: '',
                category: '',
                date: '',
            });
        }
    };

    const [showAddSection, setShowAddSection] = useState(false);

    return (
        <div className="transactions">
    <div className=" header ">
      <h1>Transactions</h1>
      <button className="add" onClick={() => setShowAddSection(!showAddSection)}><h2>Add ></h2></button>

    </div>
          {showAddSection && (
        <div className="transactions__add-section">
          <h2>Add New Transaction</h2>
          
            <form onSubmit={handleAddTransaction}>
            <div className="transaction__add_section_content">
              <label><h4>Type:</h4>
                <select value={newTransaction.type} onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}>
                  <option value="Income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </label>
              <label><h4>Amount:</h4>
                <input type="number" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })} />
              </label>
              <label><h4> Category:</h4>
                <input type="text" value={newTransaction.category} onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })} />
              </label>
              <label><h4>Date:</h4>
                <input type="date" value={newTransaction.date} onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })} />
              </label>
              <button type="submit">Add Transaction</button>
            </div>
          </form>
          
        </div>
      )}
      <div className="transaction__title">
        <div><h4></h4></div>
        <div><h4>Category</h4></div>
        <div><h4>Amount</h4></div>
        <div><h4>Type</h4></div>
        <div><h4>Day</h4></div>
        <div><h4>Status</h4></div>
      </div>
    {transactions.map((transaction, index) => (
      <div className="transaction" key={index}>
        <div><input type="checkbox" id="myCheckbox" name="myCheckbox"/></div>
        <div><h5 className="keep">{transaction.category}</h5></div>
        {transaction.type === 'Income' ?(
          <div><h2 className="keep" style={{color: '#69b5a2', fontWeight: '700'}}>${transaction.amount}</h2></div>
        ) : (
          <div><h2 className="keep" style={{color: '#d46161', fontWeight: '700'}}>-${transaction.amount}</h2></div>
        )}
        <div><h5 >{transaction.type}</h5></div>
        <div><h2 >{new Date(transaction.date).toDateString()}</h2></div>
        <div><div key={index}></div>
          { index <= 1 ? (
            <div><h6 className="transaction__pending">Pending</h6></div>
          ) : (
            <div><h6 className="transaction__success">Success</h6></div>
          )
          }
        </div>
      </div>
    ))}
  </div>
    );


}
export default Transactions;