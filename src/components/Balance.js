import React, { useRef, useEffect, useState } from 'react';

function Balance({ sampleTransactions, transactions }) {
  // Add state variables for the date range
  const currentDate = new Date();
  const last30DaysDate = new Date();
  last30DaysDate.setDate(currentDate.getDate() - 30);

  // Filter transactions based on the last 30 days
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date); // Assuming your transaction object has a 'date' property.
    return transactionDate >= last30DaysDate && transactionDate <= currentDate;
  });

  // Calculate the total sum of expenses for the last 30 days
  var totalExpenses = filteredTransactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Calculate the total income for the last 30 days
  var totalIncome = filteredTransactions
    .filter((transaction) => transaction.type === 'Income')
    .reduce((total, transaction) => total + transaction.amount, 0);

//essential, optional saving
  var totalEssential = filteredTransactions
    .filter(transaction => transaction.necessity ==='Essential')
    .reduce((total, transaction) => total + transaction.amount, 0);

  var totalOptional = filteredTransactions
    .filter(transaction => transaction.necessity ==='Optional')
    .reduce((total, transaction) => total + transaction.amount, 0);

  var totalSavings = filteredTransactions
    .filter(transaction => transaction.necessity ==='Savings')
    .reduce((total, transaction) => total + transaction.amount, 0);

  var essentialPercent = (totalEssential / totalExpenses) * 100;
  var optionalPercent = (totalOptional / totalExpenses) * 100;  
  var savingsPercent = (totalSavings / totalExpenses) * 100;


  if (totalExpenses === 0)
  {
    totalExpenses = sampleTransactions
      .filter(transaction => transaction.type === 'expense')
      .reduce((total, transaction) => total + transaction.amount, 0);

    totalIncome = sampleTransactions
      .filter(transaction => transaction.type ==='Income')
      .reduce((total, transaction) => total + transaction.amount, 0);
  
    totalEssential = sampleTransactions
      .filter(transaction => transaction.necessity ==='Essential')
      .reduce((total, transaction) => total + transaction.amount, 0);

    totalOptional = sampleTransactions
      .filter(transaction => transaction.necessity ==='Optional')
      .reduce((total, transaction) => total + transaction.amount, 0);

    totalSavings = sampleTransactions
      .filter(transaction => transaction.necessity ==='Savings')
      .reduce((total, transaction) => total + transaction.amount, 0);

    essentialPercent = (totalEssential / totalExpenses) * 100;
    optionalPercent = (totalOptional / totalExpenses) * 100;  
    savingsPercent = (totalSavings / totalExpenses) * 100;
  }

  
  const graphBaseRef = useRef(null);
  useEffect(() => {
    const bottomPosition = graphBaseRef.current.getBoundingClientRect().bottom;
    console.log('Bottom Coordinate:', bottomPosition);
  }, []);

  //Change spending limit
 const [spendingLimit, setSpendingLimit] = useState(5200); 
  const percentSpent = (totalExpenses / spendingLimit) * 100;

  const [showLimitChangeBox, setShowLimitChangeBox] = useState(false);
  const [newSpendingLimit, setNewSpendingLimit] = useState(spendingLimit);

  const handleLimitChange = () => {
    setShowLimitChangeBox(true);
  };

  const handleLimitInputChange = (e) => {
    setNewSpendingLimit(Number(e.target.value));
  };

  const handleLimitSubmit = () => {
    setSpendingLimit(newSpendingLimit); 
    setShowLimitChangeBox(false);
  };


  return (
    <div className="balance">  
      <div className="split-header balance__header">
        <h1>Balance</h1>
        {!showLimitChangeBox ? (
          <button onClick={handleLimitChange}><h2>Change Limit</h2></button>
        ) : (
          <div className="limit-change-box">
            <input
              type="number"
              value={newSpendingLimit}
              onChange={handleLimitInputChange}
            />
            <button onClick={handleLimitSubmit}><h2>Update</h2></button>
          </div>
        )}
      </div>
      <div className="balance__row">
        <div className="balance__box-small">
          <div className="balance__total-Income">
            <h2>Monthly Income</h2>
            <h3>${totalIncome}</h3>
            <h4>Last 30 days</h4>
          </div>
        </div>
        <div className="balance__box-big">
          <div className="balance__spending-limit">
            <h2>Spending Limit</h2>
            <h3><span>${spendingLimit.toFixed(0)}</span></h3>
            <div className="spending-limit-bar">
              <div className="balance__graph-base">
                <div className="spending-limit-graph-bar" style={{ width: `${percentSpent}%` }}></div>
              </div>
              <h4  style={{ textAlign:'right' }}>Spent ${totalExpenses} out of ${spendingLimit}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="balance__row">
        <div className="balance__box-small">
          <div className="balance__total-expenses">
            <h2>Monthly Expenses</h2>
            <h3>${totalExpenses.toFixed(0)}</h3>
            {percentSpent < 100 ? 
              (<h4> You're within your set limit</h4>
            ) : (
              <h4>A bit over your set limit</h4>) 
            }
          </div>
        </div>
         <div className="balance__box-big">
          <div className="balance__spending-limit">
            <h2>Expense Category</h2>
            <h3></h3>
            <div className="balance__graph-base" ref={graphBaseRef} style={{ position: 'relative'}} >
            
              <div className="expense-graph essential" style={{ top: '-10px', width: `${essentialPercent}%` }}></div>
              <div className="expense-graph optional" style={{ top: '-50px', left: `${essentialPercent}%`, width: `${optionalPercent}%` }}></div>
              <div className="expense-graph savings" style={{ top: '-90px' , left: `${essentialPercent + optionalPercent}%`, width: `${savingsPercent}%` }}></div>
            </div>
              <div className="balance__expense-key">
                <div className="circle essential"></div>
                <h4><span>Essentials</span></h4>
                <div className="circle optional"></div>
                <h4><span>Optional</span></h4>
                <div className="circle savings"></div>
                <h4><span>Savings</span></h4>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance;