import React, { useState } from 'react';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import arrowLeft from '../images/arrow-left.png';
import arrowRight from '../images/arrow-right.png';

function Cards() {
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
          <img
            src={arrowLeft}
            className="arrowLeft"
            onClick={() => handleArrowClick('left')}
            alt='card'
          />
          <img
            src={arrowRight}
            className="arrowRight"
            onClick={() => handleArrowClick('right')}
            alt='new-card'
          />
        </div>
        <div className="cards__summary">
          <div>
            <h4>Total Cash Balance</h4>
            <h3>$18,100</h3>
          </div>
            <div>
              <h4>Credit</h4>
              <h3>$1,500</h3>
            </div>
            <div>
              <h4>Debit</h4>
              <h3>$13,200</h3>
            </div>
            <div>
              <h4>Savings</h4>
              <h3>$3,400</h3>
            </div>
          </div>
      </div>
    </div>
    );
}

export default Cards;