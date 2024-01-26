import React, { useRef, useEffect, useState } from 'react';

function Balance({ sampleTransactions, transactions }) {
    const currentDate = new Date();
    const currentMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const currentMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const filteredTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= currentMonthStart && transactionDate <= currentMonthEnd;
    });

    var totalExpenses = filteredTransactions
        .filter((transaction) => transaction.type === 'expense')
        .reduce((total, transaction) => total + transaction.amount, 0);

    var totalIncome = filteredTransactions
        .filter((transaction) => transaction.type === 'Income')
        .reduce((total, transaction) => total + transaction.amount, 0);

    var totalEssential = filteredTransactions
        .filter(transaction => transaction.necessity === 'Essential')
        .reduce((total, transaction) => total + transaction.amount, 0);

    var totalOptional = filteredTransactions
        .filter(transaction => transaction.necessity === 'Optional')
        .reduce((total, transaction) => total + transaction.amount, 0);

    var totalSavings = filteredTransactions
        .filter(transaction => transaction.necessity === 'Savings')
        .reduce((total, transaction) => total + transaction.amount, 0);

    var essentialPercent = (totalEssential / totalExpenses) * 100;
    var optionalPercent = (totalOptional / totalExpenses) * 100;
    var savingsPercent = (totalSavings / totalExpenses) * 100;

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

    const graphBaseRef = useRef(null);

    return (
        <div className="balance">
            <div className="balance__child">
                <div className="balance__child_header">
                    <img src="/income.png" alt="income"/>
                    <h2>Monthly Income</h2>
                 </div>
                <h3>${totalIncome.toLocaleString()}</h3>
                <h4>Earning, Thriving, Succeeding</h4>
            </div>
            <div className="balance__child">
                <div className="balance__child_header">
                    <img src="/expense.png" alt="expense"/>
                    <h2>Monthly Expenses</h2>
                 </div>
                <h3>${totalExpenses.toLocaleString()}</h3>
                <h4>Spending Wisely, Living Fully</h4>    
            </div>
            <div className="balance__child">
                <div className="balance__child_header">
                    <img src="/investment.png" alt="investment"/>
                    <h2>Monthly Budget</h2>
                 </div>
                <h3>$12,000</h3>
                <h4> Balance -> Peace Within</h4>    
            </div>
            <div className="balance__child">
                <div className="balance__child_header">
                    <img src="/saving.png" alt="saving"/>
                    <h2>Monthly Savings</h2>
                 </div>
                <h3>${totalSavings.toLocaleString()}</h3>
                <h4>Building Wealth, Secure Future</h4>
            </div>

        </div>

    );
}











export default Balance;