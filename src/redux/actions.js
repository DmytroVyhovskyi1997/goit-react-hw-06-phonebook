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