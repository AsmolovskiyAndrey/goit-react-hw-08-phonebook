import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  const logIn = 'Create and edit your Phone book';
  const logOut = 'Login or register to see your Phone book';

  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        {isLogin ? logIn : logOut}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
