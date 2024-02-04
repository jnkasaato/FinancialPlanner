import React, { useState, useEffect } from 'react';
import './App.css';
import Transactions from './components/Transactions';
import Cards from './components/Cards';
import Overview from './components/Overview';
import Balance from './components/Balance';
import Summary from './components/Summary';
import sampleTransactions from './components/sampleTransactions';


function App() {
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

  return (
    <div className="app">
      <div className="app__header">
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
      </div>
    </div>
  );
}

export default App;
