import { useDispatch } from 'react-redux';
import { deleteTask } from 'redux/tasks/operations';
import css from './Task.module.css';

export const Task = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        {name}: {number}
      </p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete Contact
      </button>
    </div>
  );
};
