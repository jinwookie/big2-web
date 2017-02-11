import { PropTypes } from 'react';
import withChange from './WithChange';
import './TextBox.css';

const TextBox = props =>
  <input className="form-control" {...props} />;

TextBox.propTypes = {
  value: PropTypes.string,
  onUpdate: PropTypes.func
};

export default withChange(TextBox);
