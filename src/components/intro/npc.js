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
            src='images/npc.jpg'
            text='1303 南亞'
            label='stock'
            path='/npc'
            weight='權重:1.66'
            mount='股數:33,577,473'
            intro='南亞科技股份有限公司成立於中華民國八十四年三月四日，為DRAM（動態隨機存取記憶體）之研發、設計、製造與銷售商，於美國、歐洲、日本、中國設立海外行銷據點，最大股東為台塑集團之南亞塑膠工業股份有限公司。\n\n2012年Q4公司決定轉型，由標準型DRAM轉為利基型DRAM，專注產品研發，包含消費性及低功率產品的經營。\n\n公司將於2014年8月21日變更簡名為南亞科。'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;