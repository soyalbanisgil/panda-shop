import React, { useState } from 'react';
import { MenuItem } from '../../components/MenuItem/MenuItem';
import './Homepage.sass';

export const Homepage = () => {
  const [categories, setCategories] = useState([
    {
      title: 'womens',
      imageUrl:
        'https://images.unsplash.com/photo-1465408953385-7c4627c29435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      id: 1,
    },
    {
      title: 'mens',
      imageUrl:
        'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      id: 2,
    },
    {
      title: 'kids',
      imageUrl:
        'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      id: 3,
    },
  ]);

  return (
    <div className='container'>
      <MenuItem
        title={'Visit Shop'}
        imageUrl={
          'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80'
        }
        size={'large'}
      />
      <div className='category-menu'>
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};