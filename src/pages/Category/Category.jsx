import React, { useState, useEffect } from 'react';
import { ShopItems } from '../../components/ShopItems/ShopItems';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { getItems } from '../../redux/products/products.action';
import { Spinner } from '../../components/Spinner/Spinner';

const Category = ({ items, getItems }) => {
  const { category } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategoryItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategoryItems = async () => {
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
      getItems(products);
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

const mapStateToProps = (state) => ({
  items: state.products.items,
});

const mapDispatchToProps = (dispatch) => ({
  getItems: (items) => dispatch(getItems(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
