import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase, { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import Logo from '../../assets/logo.png';
import './Navbar.sass';
import CartIcon from '../Cart/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

const Navbar = ({ currentUser, hidden, setModalIsOpen }) => {
  const history = useHistory();

  const [userAdmin, setUserAdmin] = useState(null);

  useEffect(() => {
    if (currentUser) {
      firebase
        .auth()
        .currentUser.getIdTokenResult(true)
        .then((claim) => {
          setUserAdmin(claim.claims.type);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <header>
      <div className='container'>
        <nav className='navigation'>
          <Link id='logo' to='/'>
            <img src={Logo} alt='logo' />
            <span>panda.shop</span>
          </Link>
          <ul className='navbar'>
            <li className='navbar-item'>
              {(() => {
                if (!currentUser || !userAdmin) {
                  return <span></span>;
                }
                return (
                  <span
                    onClick={() => setModalIsOpen(true)}
                    className='navbar-link'
                  >
                    Add Product
                  </span>
                );
              })()}
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/shop'>
                Shop
              </Link>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/contact'>
                Contact
              </Link>
            </li>
            <li className='navbar-item'>
              {currentUser ? (
                <div
                  className='option'
                  onClick={() => {
                    auth.signOut();
                    history.push('/');
                  }}
                >
                  Sign Out
                </div>
              ) : (
                <Link className='navbar-link' to='/sign-in'>
                  Sign In
                </Link>
              )}
            </li>
            <li className='navbar-item'>
              <CartIcon />
            </li>
          </ul>
        </nav>
        {hidden ? null : <CartDropdown />}
      </div>
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Navbar);
