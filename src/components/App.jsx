import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Filter from './Filter/Filter';
import ContactList from './ContactList1/ContactList';
import ContactForm from './ContactForm/ContactForm';

import React from 'react';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  // useEffect(() => {
  //   console.log('effect');
  // });

  // const componentDidMount = () => {
  //   const localData = localStorage.getItem('contacts');
  //   if (localData) {
  //     this.setState({ contacts: JSON.parse(localData) });
  //   }
  // };

  // useEffect(() => {
  //   console.log('effect 2');
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // const componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.contacts.length !== this.state.contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // };

  const addItem = (name, number) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    const newItem = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [newItem, ...prevState]);
  };

  const deleteItem = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  // const handleFormSubmit = event => {
  //   event.preventDefault();

  //   const { name, number } = this.state;
  //   const newItem = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   this.addNewItem(newItem);
  // };

  const chengeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addItem} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={chengeFilter} />
        <ContactList contacts={filterContacts} onDeleteContact={deleteItem} />
      </div>
    </div>
  );
};

export default App;
