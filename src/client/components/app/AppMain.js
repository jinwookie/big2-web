import { PropTypes } from 'react';
import './AppMain.scss';

const AppMain = ({ children }) => {
  return (
    <main id="app-main">
      { children }
    </main>
  );
};

AppMain.propTypes = {
  children: PropTypes.any
};

export default AppMain;
