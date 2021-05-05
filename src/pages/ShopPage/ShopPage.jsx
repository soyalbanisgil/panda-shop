import React, { useEffect, useState } from 'react';
import { ShopItems } from '../../components/ShopItems/ShopItems';
import { Spinner } from '../../components/Spinner/Spinner';
import { firestore } from '../../firebase/firebase.utils';

export const ShopPage = () => {
  useEffect(() => {
    getItems();
  }, []);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItems = async () => {
    setLoading(true);

    await firestore.collection('products').onSnapshot((snapshot) => {
      const products = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        products.push(data);
      });
      setItems(products);
      setLoading(false);
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      <h1 className='title'>All items</h1>
      <ShopItems items={items} />
    </div>
  );
};
