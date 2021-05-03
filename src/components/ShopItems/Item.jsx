import React from 'react';
import './Item.sass';

export const Item = ({ item }) => {
  return (
    <div className='product-item animate__animated animate__fadeIn'>
      <div
        className='image'
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className='item-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>${item.price}</span>
      </div>
    </div>
  );
};
