import { PropTypes } from 'react';
import { AppHeader, AppMain } from 'components/app';
import 'font-awesome/scss/font-awesome.scss';
import 'styles/main.scss';

const AppContainer = ({ children }) =>
  <div id="app-container">
    <AppHeader />
    <AppMain>{ children }</AppMain>
  </div>;

AppContainer.propTypes = {
  children: PropTypes.any
};

export default AppContainer;
