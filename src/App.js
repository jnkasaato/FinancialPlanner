<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
import './App.css';
import Transactions from './components/Transactions';
import Cards from './components/Cards';
import Overview from './components/Overview';
import Balance from './components/Balance';
<<<<<<< HEAD
import Summary from './components/Summary';
=======
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
import sampleTransactions from './components/sampleTransactions';


function App() {
<<<<<<< HEAD
    const [transactions, setTransactions] = useState([]);

    const updateTransactions = (newTransactions) => {
        setTransactions(newTransactions);
    };

  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);
=======
  const [transactions, setTransactions] = useState([]);

  // Callback function to receive data from Transactions.js
  const updateTransactions = (newTransactions) => {
    setTransactions(newTransactions);
  };
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b

  return (
    <div className="app">
      <div className="app__header">
<<<<<<< HEAD
        <h1>Dashboard</h1>
      </div>
      <div className="app__content">
        <div className="app__balance_overview">
          <Balance transactions={transactions} />
          <Overview transactions={transactions} />
        </div>
        
        {isPortrait ? (
          <>
            <div className="group_mobile">
              <Cards transactions={transactions}/>
              <Summary transactions={transactions} />
             </div>
            <Transactions sampleTransactions={sampleTransactions} onUpdateTransactions={updateTransactions} />
          </>
        ) : (
          <>
            <Cards transactions={transactions}/>
            <Transactions sampleTransactions={sampleTransactions} onUpdateTransactions={updateTransactions} />
            <Summary  transactions={transactions} />
          </>
        )}
=======
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
        <div className="box-big bottom-big">
          <div className="box-overview">
            <Overview 
              sampleTransactions={sampleTransactions} 
              transactions={transactions} />
          </div>
        </div>
        <div className="box-small bottom-small">
          <div className="box-transactions">
            <Transactions sampleTransactions={sampleTransactions} onUpdateTransactions={updateTransactions} />
          </div>
        </div>
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
      </div>
    </div>
  );
}

export default App;
