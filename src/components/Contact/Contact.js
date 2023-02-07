import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import css from './Contact.module.css';
import { Box, Button } from '@mui/material';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Box className={css.wrapper}>
      <p className={css.text}>
        {name}: {number}
      </p>
      <Button type="button" className={css.button} onClick={handleDelete}>
        Delete Contact
      </Button>
    </Box>
  );
};
