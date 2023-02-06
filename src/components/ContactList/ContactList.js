import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './ContactList.module.css';
import { selectFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const myContacts = useSelector(selectAllContacts);
  const myFilter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalized = myFilter.toLowerCase();
    return myContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  return (
    <ul className={css.list}>
      {getVisibleContacts().length === 0 && myContacts.length > 0 && (
        <strong>Sorry, your search did not find any contacts.</strong>
      )}

      {myContacts.length > 0 &&
        getVisibleContacts().map(({ id, name, number }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
    </ul>
  );
};
