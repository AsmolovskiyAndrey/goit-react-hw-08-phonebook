import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import css from './TaskEditor.module.css';
import { useState } from 'react';

export const TaskEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    addContactLocal({ name, number });
    setName('');
    setNumber('');
  };

  const addContactLocal = data => {
    const { name, number } = data;
    // if (checkDoubleContact(data)) {
    //   alert(`${name} is already in contacts.`);
    //   return;
    // }
    const newContact = {
      // id: nanoid(), //! Добавляется на сервере
      name,
      number,
    };

    dispatch(addTask(newContact));
  };

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

  // const checkDoubleContact = inputData => {
  //   return myContacts.find(contact => contact.name === inputData.name);
  // };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};
