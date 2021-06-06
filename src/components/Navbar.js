// 導航欄
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

// RWD選單 開啟及關閉
function Navbar() {
  const [click, setClick] = useState(false);
  // 噁心的BUTTON
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //  BUTTON RWD  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
// 如果畫面變由小變大 可以顯示出button 否則在下拉是選單內
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
      
        <div className='navbar-container'>
          {/* 首頁 家 標題 */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            WebProject <i class="far fa-angry"></i>
          </Link>
          {/* 選單 */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          {/* 選單內容 */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* 回首頁 */}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home<i class="fas fa-home"></i>
              </Link>
            </li>
            
            {/* producer 製作者 aka我們 */}
            <li className='nav-item'>
              <Link to='/producer'  className='nav-links' onClick={closeMobileMenu} >
                producer <i class="fas fa-blind"></i>
              </Link>
            </li>
            
            {/* Stock 股票 */}
            <li className='nav-item'>
              <Link to='/stock' className='nav-links' onClick={closeMobileMenu}>
                Stock　<i class="fas fa-hand-holding-usd"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
