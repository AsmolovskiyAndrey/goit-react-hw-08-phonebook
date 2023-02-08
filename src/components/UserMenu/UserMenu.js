import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import { Button, Icon } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

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
      <Button
        type="button"
        variant="contained"
        color="info"
        endIcon={<LogoutIcon />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
