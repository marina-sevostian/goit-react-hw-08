import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.navBox}>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};

export default AppBar;
