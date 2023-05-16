import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      // [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = evt => {
    // console.log(this.state);
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
    // this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={css.formContainer}>
        <form action="" onSubmit={this.handleFormSubmit}>
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
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
            />
          </div>

          <input
            className={css['form-submit']}
            type="submit"
            value="Add contact"
          />
        </form>
      </div>

      // <form action="" onSubmit={this.handleFormSubmit}>
      //   Name
      //   <label>
      //     <input
      //       value={name}
      //       type="text"
      //       name="name"
      //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      //       required
      //       onChange={this.handleInputChange}
      //     />
      //   </label>
      //   <label>
      //     Number
      //     <input
      //       value={number}
      //       type="tel"
      //       name="number"
      //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      //       required
      //       onChange={this.handleInputChange}
      //     />
      //   </label>
      //   <input type="submit" value="Add contact" />
      //   {/* <button type="button" onClick={this.handleFormSubmit}> ,однаково працює з інпутов вище */}
      //   {/* Add contact
      //     </button> */}
      // </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
