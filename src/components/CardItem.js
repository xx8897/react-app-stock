import React from 'react';
import { Link } from 'react-router-dom';
// cards超連結
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='cards__item__weight'>{props.weight}</h5>
            <h5 className='cards__item__mount'>{props.mount}</h5>
            <h5 className='cards__item__industry'>{props.industy}</h5>
            <h5 className='cards__item__intro'>{props.intro}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
