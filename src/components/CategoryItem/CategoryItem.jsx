import React from 'react';
import './CategoryItem.sass';

export const CategoryItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='category-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='category-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
    </div>
  );
};
