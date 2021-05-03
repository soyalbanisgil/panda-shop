import React, { useState } from 'react';
import { MenuItem } from '../../components/MenuItem/MenuItem';
import './Homepage.sass';

export const Homepage = () => {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([
    {
      title: 'womens',
      imageUrl:
        'https://images.unsplash.com/photo-1465408953385-7c4627c29435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      id: 1,
      route: 'womens',
    },
    {
      title: 'mens',
      imageUrl:
        'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      id: 2,
      route: 'mens',
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      id: 3,
      route: 'sneakers',
    },
  ]);

  return (
    <div className='container'>
      <div className='animate__animated animate__fadeInLeft'>
        <MenuItem
          title={'Visit Shop'}
          imageUrl={
            'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80'
          }
          size={'large'}
        />
      </div>
      <div className='category-menu'>
        {categories.map((category) => (
          <MenuItem
            key={category.id}
            title={category.title}
            imageUrl={category.imageUrl}
            route={category.route}
          />
        ))}
      </div>
    </div>
  );
};
