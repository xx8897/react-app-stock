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
              src='images/honhai.png'
              text='2317 鴻海'
              label='stock'
              path='/honhai'
              weight='權重:4.58%'
              mount='股數：70,969,207'
              intro='鴻海精密工業股份有限公司(2317.TW)成立於1974年2月20日，公司初期以生產電視機旋扭起家，後跨入電腦連接器生產，於1991年6月掛牌上市，鴻海現已成為橫跨電腦、電視相關、行動電話、通訊網路、遊戲機、數位相機等3C電子產業，全球最大eCMMS(電子化-零元件、模組機光電垂直整合服務)廠。'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;