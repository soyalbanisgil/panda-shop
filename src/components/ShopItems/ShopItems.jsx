import React from 'react';
import { Item } from './Item';

export const ShopItems = ({ items }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {items.map((item, idx) => (
        <Item key={idx} item={item} />
      ))}
    </div>
  );
};
