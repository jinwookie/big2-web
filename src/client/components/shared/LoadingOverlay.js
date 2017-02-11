import { PropTypes } from 'react';
//import Icon from './Icon';
import './LoadingOverlay.css';

const LoadingOverlay = ({ isLoading, showChildren, children }) =>
    isLoading ?
      <div className="loading-overlay-container">
        <div className="loading-overlay">
          <h2>LOADING...</h2>
        </div>
        { showChildren ? children : null }
      </div>
      : children;

LoadingOverlay.propTypes = {
  isLoading: PropTypes.bool,
  showChildren: PropTypes.bool,
  children: PropTypes.any
};

LoadingOverlay.defaultProps = {
  isLoading: false,
  showChildren: false
};

export default LoadingOverlay;
