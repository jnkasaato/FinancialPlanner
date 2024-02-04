import React, { useState } from 'react';


function Summary({ transactions }) {

// Get the current date
const currentDate = new Date();
const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

const currentMonthTransactions = transactions.filter(transaction => {
  const transactionDate = new Date(transaction.date);
  return transactionDate >= firstDayOfMonth && transactionDate <= lastDayOfMonth;
});

const expenseSummary = {};
currentMonthTransactions.forEach(transaction => {
  if (transaction.type === 'expense') {
    if (!expenseSummary[transaction.category]) {
      expenseSummary[transaction.category] = 0;
    }
    expenseSummary[transaction.category] += transaction.amount;
  }
});

const totalMonthExpense = currentMonthTransactions.reduce((total, transaction) => {
  if (transaction.type === 'expense') {
    return total + transaction.amount;
  }
  return total;
}, 0);


    return (
      <div className="summary">
        <div className="header">
          <h1> Summary</h1>
        </div>
        <div className="summary__content">
          <h4>Monthly Expenses</h4>
          <h3>${totalMonthExpense.toLocaleString()}</h3>
        </div>
        <div >
    {Object.entries(expenseSummary).map(([category, amount]) => (
      <div key={category} className="summary__expense">
        <h2>{category}</h2>
        <h2 style={{color: '#000'}}>${amount}</h2>
      </div>
      ))}
        </div>
      </div>
    );
}

export default Summary;