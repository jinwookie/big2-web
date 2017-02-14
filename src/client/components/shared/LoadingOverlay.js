import { PropTypes } from 'react';
import Icon from './Icon';
import './LoadingOverlay.css';

const LoadingOverlay = ({ isLoading, showChildren, children }) =>
    isLoading ?
      <div className="loading-overlay-container">
        <div className="loading-overlay">
          <Icon type="circle-o-notch" className="fa-spin fa-3x fa-fw" />
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
