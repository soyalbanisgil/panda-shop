import React, { useState, useEffect } from 'react';
import { ShopItems } from '../../components/ShopItems/ShopItems';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase/firebase.utils';
import { Spinner } from '../../components/Spinner/Spinner';

export const Category = () => {
  const { category } = useParams();
  const [items, setIems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(items);

  const getItems = async () => {
    setLoading(true);

    await firestore.collection('products').onSnapshot((snapshot) => {
      const products = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.category === category) {
          products.push(data);
          setLoading(false);
        }
      });
      setIems(products);
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      <h1>{category}</h1>
      <ShopItems items={items} />
    </div>
  );
};
