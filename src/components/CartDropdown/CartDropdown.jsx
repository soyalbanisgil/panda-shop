import React from 'react';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import './CartDropdown.sass';

const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length >= 1 ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
        className='btn'
      >
        Go To Checkout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
