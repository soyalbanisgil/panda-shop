import React, { useState } from 'react';

export const SignUp = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className='sign-in'>
      <div
        className='image'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80)',
        }}
      ></div>
      <div className='form'>
        <h1>Register and start shopping</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-item'>
            <span className='material-icons'>user</span>
            <input
              onChange={handleChange}
              type='text'
              name='name'
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
              name='password2'
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
