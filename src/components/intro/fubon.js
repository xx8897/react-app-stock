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
            src='images/fubon.png'
            text='2881 富邦金'
            label='stock'
            path='/fubon'
            weight='權重:1.83%'
            mount='股數:43,686,842'
            intro='富邦金(2881)成立於1961年，前身為富邦保險，2001年富邦金以股權讓與方式納入富邦產物保險股份有限公司，並以股權轉換方式併入富邦綜合證券股份有限公司、富邦商業銀行股份有限公司、及富邦人壽保險股份有限公司。同年年底富邦金控掛牌上市，為台灣第一家上市的金融控股公司。\n\n2002年富邦金持續以股權轉換方式併入富邦證券投資信託股份有限公司及台北銀行股份有限公司，其後又陸續併入富邦直效行銷顧問股份有限公司、富邦金控創業投資股份有限公司、香港港基國際銀行有限公司、富邦資產管理股份有限公司。公司旗下富邦產險為國內最大產險公司、富邦證券為國內前三大證券商，加上壽險、投信、及轉投資香港港基銀行。資產總額約新台幣3兆元，為台灣第二大上市金控公司。'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;