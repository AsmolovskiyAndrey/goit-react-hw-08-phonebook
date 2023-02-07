// import { Title } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleInputChanged = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <>
      {/* <Title>Find contacts by name</Title> */}
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        defaultValue="Small"
        variant="outlined"
        fullWidth
        sx={{
          mb: 2,
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
        }}
        type="search"
        name="filter"
        value={filter}
        onChange={handleInputChanged}
      />
    </>
  );
};
