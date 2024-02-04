import React, { useState, useEffect } from 'react';

function Transactions({ sampleTransactions, onUpdateTransactions }) {
<<<<<<< HEAD
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
=======
  // State to manage transactions
  const [transactions, setTransactions] = useState(sampleTransactions);

  // State for the new transaction form
  const [newTransaction, setNewTransaction] = useState({
    type: 'Income',
    amount: '',
    description: '',
    date: '',
  });

  // Effect to trigger the callback whenever transactions change
  useEffect(() => {
    onUpdateTransactions(transactions);
  }, [transactions, onUpdateTransactions]);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    // Validate the form fields (you can add more validation as needed)
    if (newTransaction.amount && newTransaction.description && newTransaction.date) {
      // Create a new transaction object
      const transactionToAdd = {
        type: newTransaction.type,
        amount: parseFloat(newTransaction.amount), // Convert to number
        description: newTransaction.description,
        date: newTransaction.date,
      };
      // Update the transactions list
      setTransactions([transactionToAdd, ...transactions]); // Prepend the new transaction
      // Clear the form
      setNewTransaction({
        type: 'Income',
        amount: '',
        description: '',
        date: '',
      });
    }
  };

  // State to track whether the "Add New Transaction" section is visible
  const [showAddSection, setShowAddSection] = useState(false);

  return (
  <div className="transactions">
    <div className="split-header header ">
      <h1>Transactions</h1>
      <button onClick={() => setShowAddSection(!showAddSection)}><h2>Add ></h2></button>
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b

    </div>
          {showAddSection && (
        <div className="transactions__add-section">
          <h2>Add New Transaction</h2>
<<<<<<< HEAD
          
            <form onSubmit={handleAddTransaction}>
            <div className="transaction__add_section_content">
=======
          <form onSubmit={handleAddTransaction}>
            <div className="transactions_add-row1">
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
              <label><h4>Type:</h4>
                <select value={newTransaction.type} onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}>
                  <option value="Income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </label>
              <label><h4>Amount:</h4>
                <input type="number" value={newTransaction.amount} onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })} />
              </label>
<<<<<<< HEAD
              <label><h4> Category:</h4>
                <input type="text" value={newTransaction.category} onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })} />
=======
            </div>
            <div className="transactions_add-row2">
              <label><h4> Description:</h4>
                <input type="text" value={newTransaction.description} onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })} />
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
              </label>
              <label><h4>Date:</h4>
                <input type="date" value={newTransaction.date} onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })} />
              </label>
<<<<<<< HEAD
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
=======
            </div>
            <div className ="transaction__add-button">
              <button type="submit">Add Transaction</button>
            </div>
          </form>
        </div>
      )}
    {transactions.map((transaction, index) => (
      <div className="transaction" key={index}>
        {transaction.type === 'Income' ? (
          <>
            <div className="transactions__row">
              <h2 style={{ color: '#4bbad8', fontWeight: 'bold' }}>{transaction.description}</h2>
              <h2 style={{ color: '#4bbad8', fontWeight: 'bold' }}>${transaction.amount}</h2>
            </div>
            <div className="transactions__row">
              <h4 style={{ color: '#ffffff' }}>{new Date(transaction.date).toDateString()}</h4>
              <h4 style={{ color: '#ffffff' }}>Debit Card</h4>
            </div>
          </>
        ) : (
          <>
            <div className="transactions__row">
              <h2 style={{ color: '#e6813d', fontWeight: 'bold' }}>{transaction.description}</h2>
              <h2 style={{ color: '#e6813d', fontWeight: 'bold' }}>-${transaction.amount}</h2>
            </div>
            <div className="transactions__row">
              <h4 style={{ color: '#ffffff' }}>{new Date(transaction.date).toDateString()}</h4>
              <h4 style={{ color: '#ffffff' }}>Debit Card</h4>
            </div>
          </>
        )}
      </div>
    ))}
  </div>
);


} export default  Transactions;
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
