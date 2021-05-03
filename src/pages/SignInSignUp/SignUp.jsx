import React, { useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export const SignUp = () => {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = user;

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUser({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='sign-in'>
      <div
        className='image animate__animated animate__fadeInRight'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
        }}
      ></div>
      <div className='form animate__animated animate__fadeInLeft'>
        <h1>Register and start shopping</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <span className='material-icons'>person</span>
            <input
              onChange={handleChange}
              type='text'
              name='displayName'
              placeholder='Enter your name'
            />
          </div>
          <div className='form-item'>
            <span className='material-icons'>email</span>
            <input
              onChange={handleChange}
              type='email'
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
          <div className='form-item'>
            <span className='material-icons'>lock</span>
            <input
              onChange={handleChange}
              type='password'
              name='confirmPassword'
              placeholder='Confirm your password'
            />
          </div>
          <button className='btn' type='submit'>
            Enter
          </button>
        </form>
        <p>
          Already have an account? <a href='/sign-in'>Sign In</a>
        </p>
      </div>
    </div>
  );
};
