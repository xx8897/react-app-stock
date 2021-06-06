import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
// 酷炫BTN
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
// BTN大小
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
  // find buttonStyle
  ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) 
  // find buttonSize [0]是預設前者
  ? buttonSize
    : SIZES[0];

  return (
    <Link to='/stock' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
