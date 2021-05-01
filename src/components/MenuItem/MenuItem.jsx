import React from 'react';
import './MenuItem.sass';

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
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
