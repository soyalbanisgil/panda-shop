import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import './Item.sass';

const Item = ({ item, addItem }) => {
  return (
    <div className='product-item animate__animated animate__fadeIn'>
      <div
        className='image'
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className='item-footer'>
        <span className='name'>{item.name}</span>
        <span className='price'>${item.price}</span>
      </div>
      <button onClick={() => addItem(item)} className='btn'>
        Add To Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Item);
