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
            src='images/cathaybk.png'
            text='2882 國泰金'
            label='stock'
            path='/cathaybk'
            weight='權重:1.56%'
            mount='股數:49,142,272'
            intro='國泰金控(2882)成立於2001年十二月，成立初期以國泰人壽為主體，並於2002年起逐步增加國泰銀及國泰世紀產險等子公司，擴大經營版圖，現已成為100%控有國泰世華銀行、國泰產險、國泰證券、第七商銀及2個創業投資公司及一個管理顧問公司的金融控股公司。\n\n國泰金近來期望擴充經營規模，國泰世華銀分行目標擴大到200家，國泰綜合證券期許擠進前10大券商。'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;