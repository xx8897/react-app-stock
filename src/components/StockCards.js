import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function StockCards() {
  return (
    <div className='cards'>
      <h1>About stock</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tsmc.jpg'
              text='2330 台積電'
              label='stock'
              path='/TSMC'
            />
            <CardItem
              src='images/mediatek.jpg'
              text='2454 聯發科'
              label='stock'
              path='/TW2454'
            />
            <CardItem
              src='images/umc.jpg'
              text='2303 聯電'
              label='stock'
              path='/TW2303'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StockCards;
