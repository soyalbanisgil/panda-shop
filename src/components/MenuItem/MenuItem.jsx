import React from 'react';
import './MenuItem.sass';
import { useHistory } from 'react-router-dom';

export const MenuItem = ({ title, imageUrl, size, route }) => {
  const history = useHistory();

  return (
    <div
      onClick={() =>
        route ? history.push(`/category/${title}`) : history.push('/shop')
      }
      className={`${size} menu-item animate__animated animate__fadeInUp`}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className='background-image'
      ></div>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};
