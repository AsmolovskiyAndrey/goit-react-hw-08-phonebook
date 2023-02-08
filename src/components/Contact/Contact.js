import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.error(`${name} deleted fron Phonebook`);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        display: 'flex',
        justifyContent: 'space-between',
        p: '10px',
      }}
    >
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={handleDelete}
        color="error"
        variant="contained"
        size="small"
        endIcon={<DeleteIcon />}
      >
        Delete Contact
      </Button>
    </Box>
  );
};
