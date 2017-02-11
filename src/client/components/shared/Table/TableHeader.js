import { PropTypes } from 'react';

const TableHeader = props => {
  const { children } = props;

  return (<div className="table-header">{children}</div>);
};

TableHeader.propTypes = {
  children: PropTypes.any
};

export default TableHeader;
