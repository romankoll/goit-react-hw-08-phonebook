import React, { useState } from 'react';
import css from 'components/LoginForm/LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/contacts/auth/authOperations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password })).then(() => {
      navigate('/');
    });
    setEmail('');

    setPassword('');
  };
  const handleInputChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    <div>
      {/* Log In */}
      <div className={css.formContainer}>
        <h1>Log In</h1>
        <form action="" onSubmit={handleFormSubmit}>
          <div className={css['form-label']}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="email"
              id="email"
              name="email"
              // pattern="^[a-zA-Zа-яА-Я]+$"
              // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className={css['form-label']}>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              id="password"
              name="password"
              //   pattern="^[0-9]+$"
              //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" disabled={!email || !password}>
            Login
          </button>
          {/* <input
            className={css['form-submit']}
            type="submit"
            value="Add contact"
          /> */}
          <Link to="/register">Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
