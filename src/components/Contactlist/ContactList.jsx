import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ContactList/ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.container}>
      <table className={css.contactTable}>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>
                <p className={css.contactName}>{contact.name}</p>
              </td>
              <td>
                <p className={css.contactNumber}>{contact.number}</p>
              </td>
              <td>
                <button
                  className={css.deleteButton}
                  onClick={() => onDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    // <div>
    //   <ul>
    //     {contacts.map(contact => (
    //       <li key={contact.id}>
    //         <p>
    //           {contact.name}: {contact.number}
    //         </p>
    //         <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
