import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Navbar.sass';

export const Navbar = () => {
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
              <a className='navbar-link' href='/'>
                Add Product
              </a>
            </li>
            <li className='navbar-item'>
              <a className='navbar-link' href='/'>
                Dashboard
              </a>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/shop'>
                Shop
              </Link>
            </li>
            <li className='navbar-item'>
              <a className='navbar-link' href='/'>
                Contact
              </a>
            </li>
            <li className='navbar-item'>
              <Link className='navbar-link' to='/sign-in'>
                Sign In
              </Link>
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
