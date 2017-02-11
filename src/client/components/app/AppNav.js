import { Link } from 'react-router';
import './AppNav.scss';

const AppNav = () => {
  return (
    <nav id="app-nav">
      <ul>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/games">Games</Link></li>
      </ul>
    </nav>
  );
};

export default AppNav;
