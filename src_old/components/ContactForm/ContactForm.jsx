import { useState } from 'react';
import css from './ContactForm.module.css';
import { getStatus } from 'components/redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/operations';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const status = useSelector(getStatus);
  const myContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        console.warn(`Error types in ${e}`);
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    addContactLocal({ name, number });
    setName('');
    setNumber('');
  };

  const addContactLocal = data => {
    const { name, number } = data;
    if (checkDoubleContact(data)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      // id: nanoid(), //! Добавляется на сервере
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  const checkDoubleContact = inputData => {
    return myContacts.find(contact => contact.name === inputData.name);
  };

  return (
    <form className={css.form} onSubmit={handleSubmitForm}>
      <label>
        <div>Name</div>
        <input
          className={css.input}
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <div>Number</div>
        <input
          className={css.input}
          value={number}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button className={css.btn} disabled={status} type="submit">
        Add contact
      </button>
    </form>
  );
};
