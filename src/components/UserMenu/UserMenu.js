import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import { Icon } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, {user.name}
        <Icon>
          <PermIdentityTwoToneIcon fontSize="inherit" />
        </Icon>
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
