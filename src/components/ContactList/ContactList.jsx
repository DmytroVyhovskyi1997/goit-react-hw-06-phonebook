import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = findContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.contact} key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              className={css.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
