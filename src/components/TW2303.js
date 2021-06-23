import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function TSMC() {
  return (
    <div className='cards'>
    <h1>聯電</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/umc.jpg'
              text='2303 聯電'
              label='TW2303'
              path='/TW2303'
            /><br/>
            <h2>成立於1980年五月二十二日，為國內第一家上市的半導體公司，台灣僅次於台積電之晶圓專業代工公司。<br />
            公司發展策略不同於台積電，以晶圓製造服務為後盾，轉投資諸多半導體晶片設計公司，以自有產能及技術扶植半導體晶片設計公司，而當半導體晶片設計公司之產品在市場中具競爭優勢取得需求量時，亦回饋公司，得以維持晶圓代工產能利用率，兩者相輔相成。<br/>
            集團內成功案例有聯陽、聯詠、聯傑、智原、原相、盛群與矽統等半導體晶片設計公司。</h2>
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TSMC;
