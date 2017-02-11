import { PropTypes } from 'react';

const FormRow = ({
  className,
  children,
  columns
}) =>
  <div className={`form-row form-row-${columns}${ className ? ' ' + className: '' }`}>
    {children}
  </div>;

FormRow.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.number,
  children: PropTypes.any
};

export default FormRow;
