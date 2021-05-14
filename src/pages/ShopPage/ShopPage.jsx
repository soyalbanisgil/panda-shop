import React, { useEffect, useState } from 'react';
import { ShopItems } from '../../components/ShopItems/ShopItems';
import { Spinner } from '../../components/Spinner/Spinner';
import { connect } from 'react-redux';
import { getItems } from '../../redux/products/products.action';
import { firestore } from '../../firebase/firebase.utils';

const ShopPage = ({ items, getItems }) => {
  useEffect(() => {
    getShopItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getShopItems = async () => {
    setLoading(true);

    await firestore.collection('products').onSnapshot((snapshot) => {
      const products = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        products.push(data);
      });
      getItems(products);
      setLoading(false);
    });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='container'>
      <h1 className='title'>All items</h1>
      <p>In order to acces to the checkout page, please Sing In</p>
      <ShopItems items={items} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.products.items,
});

const mapDispatchToProps = (dispatch) => ({
  getItems: (items) => dispatch(getItems(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
