import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>About Us</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pan.jpg'
              text='22歲廢物 aka廷相　　　　學號B0829065'
              label='producer'
              path='/producer'
            />
            <CardItem
              src='images/wow.jpg'
              text='黃至祥 學號B0829060'
              label='producer'
              path='/producer'
            />
            <CardItem
              src='images/catstock.jpg'
              text='我們感興趣的台股介紹'
              label='stock'
              path='/stock'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
