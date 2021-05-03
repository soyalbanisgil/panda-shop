import React, { useState, useEffect } from 'react';
import { ShopItems } from '../../components/ShopItems/ShopItems';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase/firebase.utils';

export const Category = () => {
  const { category } = useParams();
  const [items, setIems] = useState([]);

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(items);

  const getItems = () => {
    firestore.collection('products').onSnapshot((snapshot) => {
      const products = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data.category);
        if (data.category === category) {
          products.push(data);
        }
      });
      setIems(products);
    });
  };

  return (
    <div className='container'>
      <h1>{category}</h1>
      <ShopItems items={items} />
    </div>
  );
};
