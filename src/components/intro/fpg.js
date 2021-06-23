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
            src='images/fpg.png'
            text='1301 台塑'
            label='stock'
            path='/fpg'
            weight='權重:1.77%'
            mount='股數:28,959,134'
            intro='公司成立於民國43年，原名「福懋塑膠工業股份有限公司」，在高雄市設立聚氯乙烯(PVC)廠，主要經營業務為塑膠原料、塑膠加工、精密化學及纖維製品等等，是台灣最大的石化集團，也是台灣PVC粉的最大生產商。\n\n除塑膠及纖維原料之製銷外，集團內轉投資及交叉持股如台塑化(6505)、麥寮汽電公司、台塑美國公司、南亞(1303)、台化(1326)等轉投資事業，每年對公司獲利貢獻均有成長。'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;