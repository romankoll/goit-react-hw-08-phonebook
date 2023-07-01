import React, { useState } from 'react';
import css from 'components/LoginForm/LoginForm.module.css';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    //   .then(() => {
    //   navigate('/');
    // });
    setEmail('');

    setPassword('');
  };
  const handleInputChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
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
            autocomplete="email"
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
          Enter
        </button>
        {/* <input
            className={css['form-submit']}
            type="submit"
            value="Add contact"
          /> */}
        <p className={css['linkSingUpText']}>
          To create an account,
          <Link className={css['linkSingUp']} to="/register">
            Sign Up
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
