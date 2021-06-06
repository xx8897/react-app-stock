import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          給對於台股有興趣卻尚未接觸的朋友
        </p>
        <p className='footer-subscription-text'>
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2><Link to='/producer'>關於我們
            </Link></h2>
          </div>
          <div class='footer-link-items'>
            <h2><Link to ='/stock'>股票介紹</Link></h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>資料來源</h2>
            <h2><a href="https://www.yuantafunds.com/myfund/information/1066">元大投信</a></h2>
            <h2><a href="https://www.moneydj.com/">MoneyDJ<br />理財網</a></h2>
          </div>
          <div class='footer-link-items'>
            <h2>提供意見</h2>
            <h2>E-mail:</h2>
            <a href='mailto:b0829065@cgu.edu.tw'>b0829065@cgu.edu.tw</a>
            <a href='mailto:b0829060@cgu.edu.tw'>b0829060@cgu.edu.tw</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              WebProject <i class="far fa-angry"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
