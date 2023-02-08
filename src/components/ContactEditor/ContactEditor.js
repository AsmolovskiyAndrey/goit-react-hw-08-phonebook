import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import css from './ContactEditor.module.css';
import { useState } from 'react';
import { Filter } from 'components/Filter/Filter';
import { selectAllContacts } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const myContacts = useSelector(selectAllContacts);

  const handleSubmit = e => {
    e.preventDefault();
    addContactLocal({ name, number });
    toast.success(`${name} added in Phonebook`);
    setName('');
    setNumber('');
  };

  const addContactLocal = data => {
    const { name, number } = data;
    if (checkDoubleContact(data)) {
      // alert(`${name} is already in contacts.`);
      toast.error(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      // id: nanoid(), //! Добавляется на сервере
      name,
      number,
    };

    dispatch(addContact(newContact));
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

  const checkDoubleContact = inputData => {
    return myContacts.find(contact => contact.name === inputData.name);
  };

  return (
    <div>
      <Filter />
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          {/* <div>Name</div> */}
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            // fullWidth
            sx={{
              mb: 2,
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
            }}
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
          {/* <div>Number</div> */}
          <TextField
            id="standard-basic"
            label="Number"
            variant="standard"
            // fullWidth
            sx={{
              mb: 2,
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
            }}
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
        <Button
          type="submit"
          className={css.button}
          color="primary"
          variant="contained"
          size="small"
          endIcon={<SendIcon />}
        >
          Add contact
        </Button>
      </form>
    </div>
  );
};
