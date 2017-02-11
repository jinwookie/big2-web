import { Link } from 'react-router';
import AppNav from './AppNav';
import './AppHeader.scss';

const AppHeader = () =>
  <header id="app-header">
    <Link to="/" className="logo">
      BIG2
    </Link>
    <AppNav />
  </header>;

export default AppHeader;
