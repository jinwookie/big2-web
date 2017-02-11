import { PropTypes } from 'react';

const FormColumn = ({ className, children }) =>
  <div className={`form-column${ className ? ' ' + className : '' }`}>
    { children }
  </div>;

FormColumn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default FormColumn;
