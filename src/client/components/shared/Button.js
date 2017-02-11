import { PropTypes } from 'react';
import './Button.css';

const getClassName = (displayType, className, isDisabled = false) => {
  let buttonClassName = 'button';

  if (displayType)
    buttonClassName += ' button-' + displayType;

  if (isDisabled)
    buttonClassName += ' disabled';

  if (className)
    buttonClassName += ' ' + className;

  return buttonClassName;
};

const Button = ({
  id,
  type,
  htmlType,
  className,
  isDisabled,
  isLoading,
  loadingText,
  onClick,
  children
}) =>
  <button
    id={id}
    type={htmlType}
    className={getClassName(type, className, isDisabled || isLoading)}
    onClick={e => onClick(e)}>
      { isLoading && loadingText ? loadingText : children }
  </button>;

Button.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf([ 'default', 'primary', 'secondary', 'icon', 'link' ]),
  htmlType: PropTypes.oneOf([ 'button', 'submit', 'image' ]),
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'default',
  htmlType: 'button',
  isDisabled: false,
  isLoading: false
};

export default Button;
