import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from 'redux/tasks/selectors';
import css from './TaskList.module.css';
import { selectFilter } from 'redux/tasks/selectors';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);
  const myFilter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalized = myFilter.toLowerCase();
    return tasks.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  return (
    <ul className={css.list}>
      {getVisibleContacts().length === 0 && tasks.length > 0 && (
        <strong>Sorry, your search did not find any contacts.</strong>
      )}

      {tasks.length > 0 &&
        getVisibleContacts().map(({ id, name, number }) => (
          <li key={id}>
            <Task id={id} name={name} number={number} />
          </li>
        ))}
    </ul>
  );
};
