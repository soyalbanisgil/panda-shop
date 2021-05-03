import React, { useEffect, useState } from 'react';
import { ShopItems } from '../../components/ShopItems/ShopItems';
import { firestore } from '../../firebase/firebase.utils';

export const ShopPage = () => {
  useEffect(() => {
    getItems();
  }, []);

  const [items, setIems] = useState([]);

  const getItems = () => {
    firestore.collection('products').onSnapshot((snapshot) => {
      const products = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        products.push(data);
      });
      setIems(products);
    });
  };

  return (
    <div className='container'>
      <h1 className='title'>All items</h1>
      <ShopItems items={items} />
    </div>
  );
};
