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
              src='images/mediatek.jpg'
              text='2454 聯發科'
              label='stock'
              path='/mediatek'
              weight='權重:4.95%'
              mount='股數:8,797,495'
              intro='聯發科技股份有限公司(2454.TW)成立於1997年5月28日，早期為聯電集團轉投資之半導體晶片設計公司，是無線通訊及數位媒體晶片整合系統方案之主要供應商，排名全球前十大半導體晶片廠，公司原為光儲存控制晶片製造商，後切入手機晶片製造，在數位電視產品蓬勃發展下，聯發科又投入數位電視控制IC的開發，並且成為市場龍頭。\n\n聯發科產品主要應用於光儲存、高解析度DVD、無線通訊、高解析度數位電視等領域。\n\n公司於2001年7月在台灣證券交易所掛牌上市，簡稱聯發科，代碼2454.TW。總部設於新竹，在中國大陸、新加坡、印度、日本、韓國、美國、丹麥、英國等地設有銷售及研發子公司。'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;