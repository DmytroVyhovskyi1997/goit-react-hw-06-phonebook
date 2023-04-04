import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import FormContact from './FormContact/FormContact';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { Contacts } from './Contacts/Contacts';

const App = () => {
 
  const contacts = useSelector((state) => state.contacts.items);
  // const filter = useSelector((state) => state.contacts.filter);
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    if (contacts.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const changeFilter = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleChange = e => {
    const { value } = e.currentTarget;

    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

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
      <FormContact onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <ContactFilter filter={filter} onChange={handleChange} />
      )}
      <Contacts contacts={changeFilter()} onDeleteContact={deleteContact} />
    </div>
  );
};

export default App;
