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
            src='images/delta.jpg'
            text='2308 台達電'
            label='stock'
            path='/delta'
            weight='權重:2.2%'
            mount='股數:12,847,388'
            intro='台達電子工業有限公司成立於民國64年4月，生產電視線圈及電子零組件，公司以製造繞線式磁性元件起家，為全球磁性及散熱元件重要供應商。至民國64年8月20日改組為股份有限公司，並以此核心技術延伸發展生產電源供應器，成為全球最大交換式電源供應器廠商。\n\n2010年推出自有品牌，以加強全球競爭力；2012年8月，規劃轉型成系統整合解決方案業者，聚焦於綠能及雲端整合服務。'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;