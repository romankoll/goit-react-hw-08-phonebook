import React, { useState } from 'react';
import css from 'components/SignUpForm/SignUpForm.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/authOperations';
// import { signUp } from 'redux/contacts/auth/authOperations';

const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(signUp({ name, email, password })).then(() => {
      navigate('/login');
    });
    setEmail('');
    setName('');
    setPassword('');
  };
  const handleInputChange = ({ target: { value, name } }) => {
    name === 'email'
      ? setEmail(value)
      : name === 'password'
      ? setPassword(value)
      : setName(value);
  };

  return (
    <div>
      {/* Log In */}
      <div className={css.formContainer}>
        <h1>Sign Up</h1>
        <form action="" onSubmit={handleFormSubmit}>
          <div className={css['form-label']}>
            <label htmlFor="exampleInputName">Name</label>
            <input
              value={name}
              type="text"
              id="name"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className={css['form-label']}>
            <label htmlFor="exampleInputEmail">Email</label>
            <input
              value={email}
              type="email"
              id="email"
              name="email"
              autocomplete="email"
              // pattern="^[a-zA-Zа-яА-Я]+$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className={css['form-label']}>
            <label htmlFor="exampleInputPassword">Password</label>
            <input
              value={password}
              type="password"
              id="password"
              name="password"
              autocomplete="current-password"
              //   pattern="^[0-9]+$"
              //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className={css['btn']}
            disabled={!email || !password}
          >
            Sign Up
          </button>
          {/* <input
            className={css['form-submit']}
            type="submit"
            value="Add contact"
          /> */}
          <p className={css['linkLoginText']}>
            I have an account,
            <Link className={css['linkLogin']} to="/login">
              Log In
            </Link>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
