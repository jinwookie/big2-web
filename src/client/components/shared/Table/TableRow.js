import { PropTypes } from 'react';

const TableRow = props => {
  const { children, className } = props;
  return (<div className={'table-row' + (className ? ` ${className}` : '')}>{children}</div>);
};

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};

export default TableRow;
