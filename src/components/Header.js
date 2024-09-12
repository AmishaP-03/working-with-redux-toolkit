import { authActions } from '../store/redux';
import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatchFunction = useDispatch();

  function handleLogout(event) {
    event.preventDefault();
    dispatchFunction(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
