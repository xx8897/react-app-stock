import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Cards.css';
import CardItem from './CardItem';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <img src='/images/superveiw.jpg'/> */}
      {/* 用VIDEO 比較秀 autoplay 不斷重複 */}
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Stock</h1>
      <p>我們感興趣的台股介紹<i class="fas fa-smile-beam"></i></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH Stock ! <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
