import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList1/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';
import css from 'pages/Contacts/Contacts.module.css';

const Contacts = () => {
  return (
    <div className={css['container']}>
      <ContactForm />

      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
