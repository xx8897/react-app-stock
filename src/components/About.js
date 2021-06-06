import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function About() {
  return (
    <div className='cards'>
    <h1>Web Producer</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/pan.jpg'
              text='潘廷相 學號B0829065'
              label='producer'
              path='/producer'
            />
            <h2>22歲，護理師，廢物一個，醫護環境Bad，很辛苦欸ಥ_ಥ，錢還很少，哭阿<br />
            所以知道護理人員的辛苦，想要讓醫護人員工作更輕鬆，改善護理環境。<br /> <br />
            然後我就在這邊了</h2>
            <br />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/wow.jpg'
              text='黃至祥 學號B0829060'
              label='producer'
              path='/producer'
            />
            <h2>一個喜歡資訊也喜歡投資的人<br />
            經常看些科技與美股台股的新聞，去思考未來的方向。<br />
            最近有時候覺得要是厲害到可以像大佬一樣去高盛跑量化交易就好了ʕ •ᴥ•ʔ</h2>
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
