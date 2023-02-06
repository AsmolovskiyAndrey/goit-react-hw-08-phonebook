import { Title } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleInputChanged = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <>
      <Title>Find contacts by name</Title>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChanged}
      />
    </>
  );
};
