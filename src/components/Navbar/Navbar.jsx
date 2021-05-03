import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase, { auth } from '../../firebase/firebase.utils';
import Logo from '../../assets/logo.png';
import './Navbar.sass';

export const Navbar = ({ currentUser, setModalIsOpen }) => {
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
              <a className='nav-link' href='/'>
                <span className='material-icons'>shopping_cart</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
