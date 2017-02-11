import { PropTypes } from 'react';

const getClassName = (error, className) => {
  let groupClassName = 'form-group';
  if (error)
    groupClassName += ' error';
  if (className)
    groupClassName += ' ' + className;

  return groupClassName;
};

const FormGroup = ({
  label,
  htmlFor,
  error,
  className,
  message,
  children
}) =>
  <div className={getClassName(error, className)}>
    {
      label ?
        <label htmlFor={htmlFor}>{label}</label>
        : null
    }
    { children }
    {
      message ?
        <div className="info">
          { message }
        </div>
        : null
    }
  </div>;

FormGroup.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  error: PropTypes.bool,
  className: PropTypes.string,
  message: PropTypes.string,
  children: PropTypes.any
};

export default FormGroup;
