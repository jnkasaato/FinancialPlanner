import React, { useState } from 'react';
import './App.css';
import Transactions from './components/Transactions';
import Cards from './components/Cards';
import Overview from './components/Overview';
import Balance from './components/Balance';
import sampleTransactions from './components/sampleTransactions';


function App() {
  const [transactions, setTransactions] = useState([]);

  // Callback function to receive data from Transactions.js
  const updateTransactions = (newTransactions) => {
    setTransactions(newTransactions);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1>Welcome back </h1>
      </div>
      <div className="row">
        <div className="box-big">
          <div className="box-balance">
            <Balance 
              sampleTransactions={sampleTransactions} 
              transactions={transactions} />
          </div>
        </div>
        <div className="box-small">
          <div className="box-cards">
            <Cards /> 
          </div>
        </div>
      </div>

      <div className="row">
        <div className="box-big">
          <div className="box-overview">
            <Overview 
              sampleTransactions={sampleTransactions} 
              transactions={transactions} />
          </div>
        </div>
        <div className="box-small">
          <div className="box-transactions">
            <Transactions sampleTransactions={sampleTransactions} onUpdateTransactions={updateTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
