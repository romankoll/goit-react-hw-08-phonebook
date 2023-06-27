import React, { useEffect } from 'react';

import css from 'components/ContactList1/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
// import { deleteContact } from 'redux/contactsSlice';
import { deleteContact, fetchContacts } from 'components/api/contacts';

const ContactList = () => {
  const dispatch = useDispatch();

  const { items } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterByName = filter => {
    return items.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  const normalizedFilter = filter.toLowerCase();
  const filtredContacts = filterByName(normalizedFilter);

  return (
    <div className={css.container}>
      <h2>Contacts</h2>
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
