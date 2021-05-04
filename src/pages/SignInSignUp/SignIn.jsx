import React, { useState, useEffect } from 'react';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import './SignIn.sass';

const SignIn = ({ currentUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (!currentUser) {
      return;
    } else {
      history.push('/shop');
    }
  });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    const { email, password } = user;

    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({
        email: '',
        password: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='sign-in'>
      <div className='form animate__animated animate__fadeInRight'>
        <h1>Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <span className='material-icons'>email</span>
            <input
              onChange={handleChange}
              type='text'
              name='email'
              placeholder='Enter your email'
            />
          </div>
          <div className='form-item'>
            <span className='material-icons'>lock</span>
            <input
              onChange={handleChange}
              type='password'
              name='password'
              placeholder='Enter your password'
            />
          </div>
          <button className='btn' type='submit'>
            Sign In
          </button>
          <button onClick={SignInWithGoogle} className='btn'>
            Sign In With Google
          </button>
        </form>
        <p>
          Don't have an account? <a href='/sign-up'>Register</a>
        </p>
      </div>
      <div
        className='image animate__animated animate__fadeInLeft'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
        }}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(SignIn);
