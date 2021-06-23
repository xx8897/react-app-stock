import React from 'react';
import '../Cards.css';
import CardItem from '../CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Intro</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
            src='images/csc.jpg'
            text='2002 中鋼'
            label='stock'
            path='/csc'
            weight='權重:1.61'
            mount='股數:73,341,776'
            intro='成立於1971年12月3日，總部位於高雄市小港區，成立之初是政府十大建設之一，最大股東是經濟部，持股比例22.5%，為台灣最大、唯一具有高爐煉鋼廠和軋鋼一貫作業廠，總計高爐產能達1100萬噸，產品市佔率超過50%。'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;