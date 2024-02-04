<<<<<<< HEAD
import React, { useRef, useEffect, useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import arrowLeft from '../images/arrow-left.png';
import arrowRight from '../images/arrow-right.png';

<<<<<<< HEAD
function Cards({ transactions })  {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = [card1, card2, card3, card4];

  const handleArrowClick = (direction) => {
      if (direction === 'left') {
          setCurrentCardIndex((prevIndex) =>
              (prevIndex + cards.length - 1) % cards.length
          );
      } else if (direction === 'right') {
          setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }
  };

  var totalExpenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  var totalIncome = transactions
    .filter((transaction) => transaction.type === 'Income')
    .reduce((total, transaction) => total + transaction.amount, 0);

  var totalSavings = transactions
    .filter((transaction) => transaction.necessity === 'Savings')
    .reduce((total, transaction) => total + transaction.amount, 0);

  var totalDebt = Math.round(totalIncome * .14);
  var totalDebit = totalIncome - totalExpenses;
  var totalBalance = totalDebit + totalSavings - totalDebt;

  return (
      <div className="cards">
    <div className="header">
      <h1>Cards</h1>
    </div>
    <div className="cards__content">
      <div className="cards__display">
        <img src={cards[currentCardIndex]} className="card" alt='card'/>
      </div>
      <div className="cards__arrows">
=======
function Cards() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cards = [card1, card2, card3, card4]; // Replace card2 and card3 with your image paths

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentCardIndex((prevIndex) =>
        (prevIndex + cards.length - 1) % cards.length
      );
    } else if (direction === 'right') {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }
  };

  return (
    <div className="cards">
      <div className="header">
        <h1>Cards</h1>
      </div>
      <div className="cards__display-cards">
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
        <img
          src={arrowLeft}
          className="arrowLeft"
          onClick={() => handleArrowClick('left')}
          alt='card'
        />
<<<<<<< HEAD
=======
        <img src={cards[currentCardIndex]} className="card" alt='card'/>
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
        <img
          src={arrowRight}
          className="arrowRight"
          onClick={() => handleArrowClick('right')}
          alt='new-card'
        />
      </div>
<<<<<<< HEAD
      <div className="cards__summary">
        <div>
          <h4>Total Cash Balance</h4>
          <h3 >${totalBalance.toLocaleString()}</h3>
        </div>
          <div>
            <h4>Debit</h4>
            <h3>${totalDebit.toLocaleString()}</h3>
          </div>
          <div>
            <h4>Savings</h4>
            <h3>${totalSavings.toLocaleString()}</h3>
          </div>
          <div>
            <h4>Debt</h4>
            <h3>${totalDebt.toLocaleString()}</h3>
          </div>
        </div>
    </div>
  </div>
  );
}

export default Cards;
=======
    </div>
  );
}

export default Cards;
>>>>>>> 8c49e84882e7b9a860ae8aa1440793b9ce41406b
