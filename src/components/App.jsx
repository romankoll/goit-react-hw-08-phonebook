import { nanoid } from 'nanoid';
import { Component } from 'react';

import Filter from './Filter/Filter';
import ContactList from './ContactList1/ContactList';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      // [event.target.name]: event.target.value,
    });
  };

  addNewItem = newItem => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newItem],
    }));
  };

  addItem = (name, number) => {
    // console.log(name, number);
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }
    const newItem = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newItem, ...prevState.contacts],
    }));
  };

  deleteItem = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  // handleInputChange = event => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };
  // handleInputChangeNum = event => {
  //   this.setState({
  //     number: event.target.value,
  //   });
  // };

  handleFormSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    const newItem = {
      id: nanoid(),
      name,
      number,
    };

    this.addNewItem(newItem);
  };

  chengeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();

    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addItem} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.chengeFilter} />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteItem}
        />
      </div>
    );
  }
}
export default App;
