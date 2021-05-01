import React, { useEffect, useState } from 'react';
import { PreviewCategory } from '../../components/PreviewCategory/PreviewCategory';
import ShopData from './shop.data.json';

export const ShopPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    setLoading(true);
    const loadData = [...ShopData];
    setItems(loadData);
    setLoading(false);
  };

  console.log(items);

  if (loading === true) {
    return <h1>Loading page</h1>;
  }

  return (
    <div className='container'>
      {items.map((item) => (
        <PreviewCategory key={item.id} title={item.title} items={item.items} />
      ))}
    </div>
  );
};
