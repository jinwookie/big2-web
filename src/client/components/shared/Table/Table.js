import { PropTypes } from 'react';
import './Table.css';

const Table = props => {
  const { id, className, children } = props;
  return <div id={id} className={'table' + (className ? ` ${className}`: '')}>{ children }</div>;
};

Table.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
};

export default Table;
