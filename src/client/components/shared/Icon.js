import { PropTypes } from 'react';

const Icon = ({ type }) =>
  <i className={`fa fa-${type} fa-lg`} />;

Icon.propTypes = {
  type: PropTypes.string.isRequired
};

export default Icon;
