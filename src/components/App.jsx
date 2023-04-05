import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getFilter } from '../redux/selectors';

import { setFilter, delContact, addContact } from '../redux/actions';
import FormContact from './FormContact/FormContact';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Contacts } from './Contacts/Contacts';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const [renderFlag, setFlag] = useState(true);

  useEffect(() => {}, []);

  useEffect(() => {
    if (renderFlag) {
      const contactsFromLocalStorage = localStorage.getItem('contactList');

      if (contactsFromLocalStorage !== 'undefined') {
        const parsedContacts = JSON.parse(contactsFromLocalStorage);

        if (parsedContacts) {
        }
      }
      setFlag(false);
    } else {
      localStorage.setItem('contactList', JSON.stringify(contacts));
    }
  }, [contacts, renderFlag]);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  const deleteContact = e => {
    dispatch(delContact(e));
  };
  const handleSubmit = e => {
    const name = e.name;
    const number = e.number;
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
    }
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <FormContact onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <ContactFilter filter={filter} onChange={handleChange} />
      )}
      <Contacts contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
