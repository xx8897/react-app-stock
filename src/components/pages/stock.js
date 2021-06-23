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
              src='images/tsmc.jpg'
              text='2330 台積電'
              label='stock'
              path='/msci'
            />
            <CardItem
              src='images/mediatek.jpg'
              text='2454 聯發科'
              label='stock'
              path='/mediatek'
            />
            <CardItem
              src='images/honhai.png'
              text='2317 鴻海'
              label='stock'
              path='/honhai'
            />
            <CardItem
            src='images/delta.png'
            text='2308 台達電'
            label='stock'
            path='/delta'
            />
            <CardItem
            src='images/umc.jpg'
            text='2303 聯電'
            label='stock'
            path='/umc'
            />
            <CardItem
            src='images/fubon.png'
            text='2881 富邦金'
            label='stock'
            path='/fubon'
            />
            <CardItem
            src='images/fpg.png'
            text='1301 台塑'
            label='stock'
            path='/fpg'
            />
            <CardItem
            src='images/npc.jpg'
            text='1303 南亞'
            label='stock'
            path='/npc'
            />
            <CardItem
            src='images/csc.jpg'
            text='2002 中鋼'
            label='stock'
            path='/csc'
            />
            <CardItem
            src='images/cathaybk.png'
            text='2882 國泰金'
            label='stock'
            path='/cathaybk'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;