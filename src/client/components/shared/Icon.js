import { PropTypes } from 'react';

const getClassName = (type, className) => {
  let iconClassName = `fa fa-${type}`;

  if (className)
    iconClassName += ` ${className}`;

  return iconClassName;
};

const Icon = ({ type, className }) =>
  <i className={getClassName(type, className)} />;

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
