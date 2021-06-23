import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function TSMC() {
  return (
    <div className='cards'>
    <h1>台積電</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/tsmc.jpg'
              text='2330 台積電'
              label='TSMC'
              path='/TSMC'
            /><br/>
            <h2>台積電成立於1987年2月21日，是全球第一家也是全球最大的專業積體電路(IC)製造服務公司，公司經營策略為只提供客戶專業積體電路之製造技術服務，而不設計、生產、或銷售自有品牌產品，不與客戶做商品之競爭。<br />
            公司在北美、歐洲、日本、中國大陸、南韓、印度等地均設有子公司或辦事處，產能亦來自海外子公司為WaferTech美國子公司、台積電（上海）有限公司，及新加坡合資SSMC公司之支援。<br/>
            公司首創建置資訊平台—虛擬晶圓廠(Virtual Fab)，提供整套服務，客戶也可從晶圓廠、封裝廠、到測試廠整個供應鏈掌握訂單進度。</h2>
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TSMC;
