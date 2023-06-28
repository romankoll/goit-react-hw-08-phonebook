import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from 'components/SignUpForm/SignUpForm.module.css';

const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log({ password, email });
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
              id="name"
              name="email"
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
              type="tel"
              id="password"
              name="password"
              pattern="^[0-9]+$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" disabled={!email || !password}>
            Sign Up
          </button>
          {/* <input
            className={css['form-submit']}
            type="submit"
            value="Add contact"
          /> */}
          <Link to="/login">Log In</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
