import { PropTypes } from 'react';

const CheckBox = ({
  isChecked,
  onChange,
  children,
  ...rest
}) =>
  <div className="checkbox">
    <input type="checkbox" checked={isChecked} {...rest} onChange={() => onChange(!isChecked)} />
    <span>{ children }</span>
  </div>;

CheckBox.propTypes = {
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.any
};

export default CheckBox;
