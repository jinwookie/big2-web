import { PropTypes } from 'react';
import './Form.css';

const Form = ({ className, children }) =>
  <div className={`form${ className ? ' ' + className : '' }`}>
    { children }
  </div>;

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default Form;
