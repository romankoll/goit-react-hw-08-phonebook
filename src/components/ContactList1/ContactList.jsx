import React from 'react';

import css from 'components/ContactList1/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterByName = filter => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = filterByName(normalizedFilter);

  return (
    <div className={css.container}>
      <table className={css.contactTable}>
        <tbody>
          {filtredContacts.map(({ id, name, number }) => (
            <tr key={id}>
              <td>
                <p className={css.contactName}>{name}</p>
              </td>
              <td>
                <p className={css.contactNumber}>{number}</p>
              </td>
              <td>
                <button
                  className={css.deleteButton}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
