import React from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import './PreviewCategory.sass';

export const PreviewCategory = ({ title, items }) => {
  return (
    <div className='preview-category'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CategoryItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};
