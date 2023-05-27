import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleFormSubmit = evt => {
    // console.log(this.state);
    evt.preventDefault();

    onSubmit(name, number);
    setName('');
    setNumber('');
    // this.setState({ name: '', number: '' });
    // this.reset();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };
  return (
    <div className={css.formContainer}>
      <form action="" onSubmit={handleFormSubmit}>
        <div className={css['form-label']}>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className={css['form-label']}>
          <label htmlFor="number">Number</label>
          <input
            value={number}
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </div>

        <input
          className={css['form-submit']}
          type="submit"
          value="Add contact"
        />
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
