import Counter from './components/Counter';
import Auth from './components/Auth.js'
import Header from './components/Header.js';
import UserProfile from './components/UserProfile.js';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <>
    <Header />
    {!isAuthenticated && <Auth />}
    {isAuthenticated && <UserProfile />}
    <Counter />
    </>
  );
}

export default App;
