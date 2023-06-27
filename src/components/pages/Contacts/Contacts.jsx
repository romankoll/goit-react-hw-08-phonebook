import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList1/ContactList';
import Filter from 'components/Filter/Filter';
import React from 'react';

const Contacts = () => {
  return (
    <div>
      <ContactForm />

      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
